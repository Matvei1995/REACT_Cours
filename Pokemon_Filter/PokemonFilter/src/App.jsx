import React, { useState, useEffect } from "react";
import { FiterBar } from "./FiterBar";
import { Button } from "react-bootstrap";

export function App({ pokemons }) {
  const [attaqueMin, setAttaqueMin] = useState(0);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  const sortedPokemons = filteredPokemons.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    } else if (a.id > b.id) {
      return 1;
    } else {
      return 0;
    }
  });
  

  useEffect(() => {
    const filtered = pokemons.filter(
      (pokemons) => pokemons.stats.attack >= attaqueMin
    );

  
    const sorted = isAscending
      ? filtered.sort((a, b) => a.stats.attack - b.stats.attack)
      : filtered.sort((a, b) => b.stats.attack - a.stats.attack);

    setFilteredPokemons(sorted);
  }, [attaqueMin, isAscending]);

  function handleChange(ev){
    setAttaqueMin(ev.target.value);
  };

  function handleSort(){
    setIsAscending(!isAscending);
  };

  const sortText = isAscending ? "croissant" : "décroissant";

  return (
    <div>
      <FiterBar handleChange={handleChange} />
      <Button>Trier par ordre Alphabétique</Button>
      {/* <Button variant="primary" onClick={handleSort}>
        Trier par attaque {sortText}
      </Button>
      {filteredPokemons.map((pokemons) => (
        <div key={pokemons.id}>
           <img src={pokemons.image} />
          <h2>{pokemons.name}</h2>
          <p>{pokemons.id}</p>
          <p>Attaque : {pokemons.stats.attack}</p>
        </div>
      ))} */}
      {sortedPokemons.map((pokemons) =>(
        <div key={pokemons.id}>
        <img src={pokemons.image} />
       <h2>{pokemons.name}</h2>
       <p>{pokemons.id}</p>
       <p>Attaque : {pokemons.stats.attack}</p>
     </div>
      ))}
    </div>
  );
}
