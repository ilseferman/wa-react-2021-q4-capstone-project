import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Logo } from './styles';
import { useSelector } from 'react-redux';
import { selectTotalAmount } from '../../../utils/redux/slices/cartSlice';

function Header({ children }) {
  // redux   
  const total = useSelector(selectTotalAmount);
  
  return (
    <header>
      <Nav>
        <Link to="/home">
          <Logo>
            <i className="fas fa-store-alt"></i>
            <h3>Brand</h3>
          </Logo>
        </Link>

        {children}
        <button>
          <Link to="/cart">
            ({total}) <i className="fas fa-shopping-cart"></i>
          </Link>
        </button>
      </Nav>
    </header>
  );
}

export default Header;
