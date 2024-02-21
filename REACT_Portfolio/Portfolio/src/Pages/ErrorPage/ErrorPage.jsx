import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './ErrorPage.scss';

function ErrorPage() {
  return (
    <>
      <Navbar />
      <div className="Error-page">
        <h1>404</h1>
        <h2>Oops ! La page que vous demandez n'existe pas</h2>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </>
  );
}

export default ErrorPage;
