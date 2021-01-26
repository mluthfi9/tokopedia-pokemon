import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore and Catch Legendary Pokemon!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/mewtwo.jpg'
              text='One most powerfull pokemon with psychic abily'
              label='Mewtwo'
              imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'
            />
            <CardItem
              src='/images/rayquaza.jpg'
              text='Legends remain of how it put to rest the clash between Kyogre and Groudon'
              label='Rayquaza'
              imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/dialga.jpg'
              text="A legendary Pokémon of Sinnoh. It is said that time flows when Dialga's heart beats"
              label='Dialga'
              imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png'
            />
            <CardItem
              src='./images/xerneas.jpg'
              text='Legends say it can share eternal life. It slept for a thousand years in the form of a tree before its revival'
              label='Xerneas'
              imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png'
            />
            <CardItem
              src='./images/Suicune.jpg'
              text='Said to be the reincarnation of north winds, it can instantly purify filthy, murky water.'
              label='Suicune'
              imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
