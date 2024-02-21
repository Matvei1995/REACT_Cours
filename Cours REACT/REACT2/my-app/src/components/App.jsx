import { useState } from "react";

export function App() {
  const [compteur, setCompteur] = useState(0);

  const [texte, setTexte] = useState("Hello World");

  const handleChange = (event) => {
    setTexte(event.target.value);
  };

  return (
    <>
      <h1>{texte}</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Clic moi !</button>
      <p>{compteur}</p>
    </>
  );

  function handleClick() {
    setCompteur(compteur + 1);
  }
}
