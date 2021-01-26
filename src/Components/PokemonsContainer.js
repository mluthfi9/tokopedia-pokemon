import React, {useEffect, useState} from 'react';
import Pokemon from './Pokemon';
import './PokemonContainer.css';
import { useLazyQuery } from '@apollo/client';
import { GET_POKEMONS, gqlVariables } from '../GraphQL/get-pokemons';

export const LOCAL_STORAGE_KEY ='pokedex.list';

export function PokemonsContainer(){
    const [getPokemons, { loading, error, data }] = useLazyQuery(GET_POKEMONS, {
        variables: gqlVariables
      });
    const [myPokemons, setMyPokemons] = useState([]);

    useEffect(() => {
        getPokemons();
        const pokemonStrorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(pokemonStrorage) setMyPokemons(pokemonStrorage);
    }, [getPokemons]);

    function GetPokemonsCount(id){
        return myPokemons.filter(p => p.id === id).length;
    }

    function NextPage(){
        if(data && data.pokemons && data.pokemons.nextOffset){
            gqlVariables.offset = data.pokemons.nextOffset;
            getPokemons();
        }
    }

    function PreffPage(){
        if(data && data.pokemons){
            gqlVariables.offset = data.pokemons.prevOffset;
            getPokemons();
        }
    }

    if (loading) return <h1>Loading Pokemon....</h1>;
    if (error) return `Error! ${error.message}`;
    return (
        <>
            <h1>Pokemon List </h1>
            <div id="poke_container" className="poke-container">
                {data && data.pokemons && data.pokemons.results &&
                     data.pokemons.results.map(p => <Pokemon own ={GetPokemonsCount(p.id)} key = {p.id} pokemon = {p}/>)}
            </div>
            <div className="button-link-container">
                {data && data.pokemons &&  <button className="btn-link" onClick={ ()=> PreffPage()}>
                    <i className="fa fa-angle-double-left"/>Prev Page</button>}
                {data && data.pokemons &&  <button className="btn-link" onClick={ ()=> NextPage()}>Next Page 
                    <i className="fa fa-angle-double-right"/></button>}
            </div>
            
        </>
    );
}