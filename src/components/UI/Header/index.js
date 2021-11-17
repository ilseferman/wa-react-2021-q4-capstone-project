import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav, Logo } from './styles';
import { selectTotalAmount } from '../../../utils/redux/slices/cartSlice';

const Header = function ({ children }) {
  // redux
  const total = useSelector(selectTotalAmount);

  return (
    <header>
      <Nav>
        <Link to="/home">
          <Logo>
            <i className="fas fa-store-alt" />
            <h3>Brand</h3>
          </Logo>
        </Link>

        {children}
        <button type="button">
          <Link to="/cart">
            ({total}) <i className="fas fa-shopping-cart" />
          </Link>
        </button>
      </Nav>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
