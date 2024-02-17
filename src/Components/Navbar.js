import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../nourishing-you-logo/svg/logo-no-background.svg'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // Prevent default Link behavior
    
    const currentPath = window.location.pathname;
    const homePagePath = '/nourishingyoutoday'; // Adjust this to match your homepage path
    
    if (currentPath === homePagePath) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        }
    } else {
        window.location.href = homePagePath;
    }
};

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <HashLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-img"/>
            </div>
          </HashLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
             <Link 
              to='/'
              className='nav-links' 
              onClick={(e) => handleSmoothScroll(e, 'section1')}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
            <Link 
              to='/'
              className='nav-links' 
              onClick={(e) => handleSmoothScroll(e, 'section2')}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <HashLink
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Recipe
              </HashLink>
            </li>

            <li>
              <HashLink
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </HashLink>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;