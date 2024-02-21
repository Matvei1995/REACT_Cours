import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App.jsx';
import './style/app.scss';


fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
.then(res=>res.json())
.then(pokemons=>{
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<App pokemons={pokemons}/>
</React.StrictMode>,
);
});

