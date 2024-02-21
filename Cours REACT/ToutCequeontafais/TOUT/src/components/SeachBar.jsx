import { useState } from "react";

export function SearchBar({pokemons}){

    const [poke,setPoke] = useState();


    function research(event){
        event.preventDefault();
        const targetable = event.target;

        const foundPokemon = targetable.querySelector("found").value;

        pokemons.forEach((element,i) => {
            if(element.name == foundPokemon){
                setPoke(
                    <div key={i}>
                        <h2>{element.id}</h2>
                        <h3>{element.name}</h3>
                        <img src={element.image} width="100" height="100"/> 
                    </div>
                    );
            }
        });
    }

    return (
        <div>
            <h2>Rechercher Votre Pokémon</h2>
            <form onSubmit={research}>
                <input type="text" id="found" name="found" placeholder="Quel Pokemon ?"/>
                <button>Catch them all !!!</button>
            </form>
            {poke}
        </div>
    )
}