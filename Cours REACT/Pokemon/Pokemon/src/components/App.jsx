import "../style/app.scss";
import { useState } from "react";
import { PokemonList } from "./PokemonList.jsx";
import { PokemonDetail } from "./PokemonDetail.jsx";

export function App({ pokemons }) {
  const [selectedPokemon, setSelectedPokemon] = useState(pokemons[0]);

  function handlePokemonClick(pokemon){
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="grid">
     
      <PokemonList pokemons={pokemons} onClickPokemon={handlePokemonClick} />
      <PokemonDetail pokemon={selectedPokemon} pokemons={pokemons}/>
    </div>
  );
}
