import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = ()=> setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Tokopedia Pokemon <img alt="logo" className="nav-bar-logo" src="images/tokopedia-ico.png"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className ={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}> 
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/MyPokemon' className='nav-links' onClick={closeMobileMenu}> 
                                My Pokemon
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/PokemonList' className='nav-links' onClick={closeMobileMenu}> 
                                Pokemon List
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
