import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Explore pokemon world with your pokemon partner
        </p>
        <p className='footer-subscription-text'>
          Create By Muhammad Luthfi for Project Assinment Web Platform Engineers-Tokopedia
        </p>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>(+62) 89678843366</h2>
          </div>
          <div className='footer-link-items'>
            <h2>Linkedin.com/in/m-luthfi/</h2>
          </div>
          <div className='footer-link-items'>
            <h2>Work.Muhluthfi@Gmail.com</h2>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default Footer;
