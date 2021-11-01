import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Logo } from './styles';

function Header({ onPageChange }) {
  return (
    <header>
      <Nav>
        <Link to="/home">
          <Logo>
            <i className="fas fa-store-alt"></i>
            <h3>Brand</h3>
          </Logo>
        </Link>

        <input type="text" placeholder="Search..." />
        <button>
          <i className="fas fa-shopping-cart"></i>
        </button>
      </Nav>
    </header>
  );
}

export default Header;
