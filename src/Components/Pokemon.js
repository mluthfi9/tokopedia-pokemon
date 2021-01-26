import React from 'react';
import './Pokemon.css';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

export default function Pokemon({ pokemon, own, release }) {
    return (
        <>

            <div className="pokemon">
                <Link to={{ pathname: '/PokemonDetails', state: { name: pokemon.name, imageUrl: pokemon.image } }} >
                    <div className="img-container">
                        <img src={pokemon.image} alt={pokemon.name} />
                    </div>
                    <div className="info">
                        <h3 className="name">{pokemon.name}</h3>
                        {pokemon.nickname === undefined ? <small>own: <span>{own}</span></small> : <h4>{pokemon.nickname}</h4>
                        }
                    </div>
                </Link>
                {pokemon.nickname &&
                    <Popup trigger={<button className="btn btn-primary btn-custom"> Release Pokemon </button>} modal>
                        {close =>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" onClick={close}>&times;</button>
                                        <h4 className="modal-title">Release Pokemon</h4>
                                    </div>
                                    <div className="modal-body">
                                        <p>Are you sure want to release this pokemon?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" onClick={() => release(pokemon.nickname)}>Release</button>
                                        <button type="button" className="btn btn-default" onClick={close}>Cancel</button>
                                    </div>
                                </div>

                            </div>}
                    </Popup>}
            </div>
        </>
    );
}
