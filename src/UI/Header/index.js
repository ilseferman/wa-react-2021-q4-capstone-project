import React from 'react';
import { Nav, Logo, NavItems } from './styles';

function Header({ onPageChange }) {
  return (
    <header>
      <Nav>
        <Logo onClick={() => onPageChange('HomePage')}>
          <i className="fas fa-store-alt"></i>
          <h3>Brand</h3>
        </Logo>

        <NavItems>
          <input type="text" placeholder="Search..." />
          <button>
            <i className="fas fa-shopping-cart"></i>
          </button>
        </NavItems>
      </Nav>
    </header>
  );
}

export default Header;
