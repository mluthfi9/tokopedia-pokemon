import React from 'react';
import '../App.css';
import './Banner.css';

function Banner() {
  return (
    <div className='banner-container'>
      <img src='/images/Pokemon-banner.jpg' alt='banner' className='banner-background' />
      <h1>WELCOME TO POKEMON WORLD</h1>
      <p>What are you waiting for?</p>
      <div className='banner-btns'>
      <button className='btn btn--outline btn--large'>
          Catch your first pokemon now <img className='pokeball' src='/images/pokeball.png' alt='pokeball-logo'/>
        </button>
      </div>
    </div>
  );
}

export default Banner;
