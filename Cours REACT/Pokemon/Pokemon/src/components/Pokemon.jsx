
export function Pokemon({ pokemon, onClickPokemon }) {
  function onClickkPokemon() {
    onClickPokemon(pokemon);
  }
  return (
    <div className="cardPokemonStyle" onClick={onClickkPokemon}>
      <h2>{pokemon.id}</h2>
      <h3>{pokemon.name}</h3>

      <img className="pokemonSize" src={pokemon.image} alt={pokemon.name} />
    </div>
  );
}
