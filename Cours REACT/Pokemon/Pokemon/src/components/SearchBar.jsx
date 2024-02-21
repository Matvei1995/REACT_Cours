import React, { useState } from 'react';

export function SearchBar({ onSearch,pokemons }) {
  const [query, setQuery] = useState(pokemons);

  function handleSearch(){
    onSearch(query);
  };

  return (
    <div>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
}


