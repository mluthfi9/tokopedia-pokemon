import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Components/pages/Home';
import PokemonList from './Components/pages/PokemonList';
import PokemonDetails from './Components/pages/PokemonDetails';
import { MyPokemon } from './Components/pages/MyPokemon';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/PokemonList' exact component={PokemonList}/>
        <Route path='/PokemonDetails' exact component={PokemonDetails}/>
        <Route path='/MyPokemon' exact component={MyPokemon}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
