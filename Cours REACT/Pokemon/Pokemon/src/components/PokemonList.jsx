import { Pokemon } from "./Pokemon";
export function PokemonList({ pokemons, onClickPokemon }) {
  const pokemonsTags = pokemons.map((pokemon, id) => (
    <Pokemon key={id} pokemon={pokemon} onClickPokemon={onClickPokemon} />
  ));

  return <div>{pokemonsTags}</div>;
}
