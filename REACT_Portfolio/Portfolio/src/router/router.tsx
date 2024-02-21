
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
const router = createBrowserRouter([
  
    { element: <Layout />,
    errorElement: <ErrorPage />,
    
    children: [
      {
        path: '/',
        element: <Home />,
      },
   
    ],
     
      
    },
  ]);
  const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
);
