import React, {useEffect, useState} from 'react';
import Pokemon from '../Pokemon';
import '../PokemonContainer.css';

export const LOCAL_STORAGE_KEY ='pokedex.list';

export function MyPokemon(){
    const [myPokemons, setMyPokemons] = useState([]);

    useEffect(() => {
        const pokemonStrorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(pokemonStrorage) setMyPokemons(pokemonStrorage);

    },[]);    
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(myPokemons));
    }, [myPokemons]);

    function ReleasePokemon(nickname){
        const newList = myPokemons.filter(pokemon => pokemon.nickname !== nickname);
        setMyPokemons(newList);
    }

    return (
        <>
            <h1>{myPokemons.length === 0 ? "No Pokemon Yet" : "Your Pokemon List"} </h1>
            <div id="poke_container" className="poke-container">
                {myPokemons && myPokemons.map(p => <Pokemon key = {p.nickname} pokemon = {p} release={ReleasePokemon}/>)}
            </div>
        </>
    );
}