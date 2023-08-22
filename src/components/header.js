import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Header.css';

function Header() {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list" style={{ marginLeft: 'auto' }}>
            <li className="nav-item">
              <Link to="section1" spy={true} smooth={true} offset={-70} duration={200}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="section2" spy={true} smooth={true} offset={-70} duration={200}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="section3" spy={true} smooth={true} offset={-70} duration={200}>
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="section4" spy={true} smooth={true} offset={-70} duration={200}>
                Creators
              </Link>
            </li>
          </ul>
        </nav>
        <div className="logo">Genbrugsspillet</div>
      </header>
    </div>
  );
}

export default Header;





