import React, { useState, useEffect, useRef } from 'react'
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../GraphQL/get-pokemon';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './PokemonCards.css';
import { useHistory } from 'react-router-dom';

export const LOCAL_STORAGE_KEY = 'pokedex.list';
export default function PokemonCards({ name, imageURL }) {
    const history = useHistory();
    useEffect(() => {
        if(!name){
            history.push('/PokemonList');
        }
        const pokemonStrorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (pokemonStrorage) setMyPokemons(pokemonStrorage);
    }, []);

    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: { name: name.toLowerCase() }
    });

    const pokemonName = useRef();
    const [myPokemons, setMyPokemons] = useState([]);
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(myPokemons));
    }, [myPokemons]);

    function CatchPokemon() {
        if (pokemonName.current.value !== '') {
            const isExist = myPokemons.find(p => p.nickname.toUpperCase() === pokemonName.current.value.toUpperCase())
            if (isExist) alert('sorry name already exist, please choose another name');
            else {
                setMyPokemons(prev => {
                    return [...prev, {
                        id: data.pokemon.id, name: data.pokemon.name, image: imageURL, nickname: pokemonName.current.value
                    }];
                });
                setOpen(o => !o);
                alert('Horay!!! new pokemon has registred in My Pokemon page');
            }
        }
        else alert('Please input pokemon name first');
    }

    function CatchingPokemon() {
        const num = Math.floor(Math.random() * 2);
        console.log(num);
        if (num === 1) setSuccess(true);
        else setSuccess(false);
        setOpen(o => !o);
    }

    if (loading) return <h1>Loading Pokemon....</h1>;
    if (error) return `Error! ${error.message}`;

    if (data && data.pokemon) {
        const dataPokemon = data.pokemon;
        return (
            <>
                <div className="container">
                    <div className="card">
                        <div className="container-fliud">
                            <div className="wrapper row">
                                <div className="preview col-md-3 col-sm-2">

                                    <div className="preview-pic tab-content">
                                        <div className="tab-pane active" id="pic-1">
                                            <img src={imageURL} alt={dataPokemon.name} /></div>
                                    </div>

                                </div>
                                <div className="details col-md-10">
                                    <h2 className="poke-name">{dataPokemon.name} <span className="poke-name-span">#{dataPokemon.order}</span></h2>
                                    <label className="label">Pokemon Data</label>

                                    <div className="table-container">
                                        <div className="column">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>Type</td>
                                                        <td>{dataPokemon.types.map(t => t.type.name).join(', ')}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Species</td>
                                                        <td>{dataPokemon.species.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Height</td>
                                                        <td>{dataPokemon.height} feet</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Weight</td>
                                                        <td>{dataPokemon.weight} lbs</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="column">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>Abilities</td>
                                                        <td>{dataPokemon.abilities.map(t => t.ability.name).join(', ')}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Base Stats</td>
                                                        <td>{dataPokemon.stats.map(t => t.base_stat).join(', ')}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Form</td>
                                                        <td>{dataPokemon.forms.map(t => t.name).join(', ')}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total Move</td>
                                                        <td>{dataPokemon.moves.length}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="action">
                                        <button className="catch btn btn-default" onClick={CatchingPokemon}> Catch </button>
                                        <Popup open={open} closeOnDocumentClick onClose={closeModal}>

                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button" className="close" onClick={closeModal}>&times;</button>
                                                        <h4 className="modal-title">{success ? 'Horay!!! Pokemon Catched' : 'Oh no!!! the pokemon go away'}</h4>
                                                    </div>
                                                    <div className="modal-body">
                                                        {success ?
                                                            <div className="form-group">
                                                                <label>Now give it a name</label>
                                                                <input ref={pokemonName} type="text" className="form-control" placeholder="Pokemon Name" />
                                                            </div> : <label>Dont give up!</label>}
                                                    </div>
                                                    <div className="modal-footer">
                                                        {success && <button type="button" className="btn btn-primary" onClick={() => CatchPokemon()}>Confirm</button>}

                                                        <button type="button" className="btn btn-default" onClick={closeModal}>Release</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </Popup >
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}