import React from 'react';
import PokemonCards from '../PokemonCards';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client';

export default function PokemonDetails(props) {
    const client = new ApolloClient({
        uri: 'https://graphql-pokeapi.vercel.app/api/graphql'
    });
    
    return (
        <>
            <ApolloProvider client={client}>
                <main>
                    <PokemonCards name={props.location.state.name} imageURL ={ props.location.state.imageUrl}/>
                </main>
            </ApolloProvider>
        </>
    )
}
