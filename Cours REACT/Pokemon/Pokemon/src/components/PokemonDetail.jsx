import { Pokemon } from "./Pokemon.jsx";
import { SearchBar } from "./SearchBar.jsx";

export function PokemonDetail({ pokemon,onSearch,pokemons }) {
  console.log(pokemon);
  const evolution = pokemon.apiEvolutions[0];
  const types = pokemon.apiTypes[1];

  return (
    <div className="stylePokemonDetail">
      <div className="stylePokemonDetail_card">
      <SearchBar  onSearch={onSearch} />
        <h1>n°{pokemon.id}</h1>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image} />
        {/* A revoir pour afficher tout les types!!!! */}
          <h2>Type:{types? types.name : pokemon.apiTypes[0].name} </h2>
        <img src={pokemon.apiTypes[0].image} />
        {types? <img src={types.image} alt={pokemon.name} /> :
        <p></p>}
        {evolution? <Pokemon pokemon={pokemons[(evolution.pokedexId)-1]}/>:
        <h2>Pas d'évolution</h2>}
      </div>
    </div>
  );
}
