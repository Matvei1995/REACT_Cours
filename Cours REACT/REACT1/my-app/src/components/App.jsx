import { useState } from "react";



export function App(){
    const [compteur, setCompteur] = useState(0);
    let name = "test";
    

function handleClick(){
    setCompteur(compteur+1);
}

    return (
       
     <div>
        <h1>{name}</h1>
        <button onClick={handleClick}>Clic moi !</button>
        <p>{compteur}</p>
     </div>

    
    
    )
    }
