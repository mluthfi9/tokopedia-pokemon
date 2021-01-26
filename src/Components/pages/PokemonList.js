import React from 'react'
import { PokemonsContainer } from '../PokemonsContainer'
import { ApolloProvider } from '@apollo/client';
import ApolloClient from 'apollo-boost';
import '../../App.css';

export default function PokemonList() {
    const client = new ApolloClient({
        uri :'https://graphql-pokeapi.vercel.app/api/graphql'
    });

    return(
        <>
        <ApolloProvider client={client}>
            <main>
                <PokemonsContainer />
            </main>
        </ApolloProvider>        
        </>
    );
}