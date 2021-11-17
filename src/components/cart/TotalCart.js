import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Title } from '../UI';
import { getTotal, selectTotal } from '../../utils/redux/slices/cartSlice';

const TotalCart = function ({ cart }) {
  const dispatch = useDispatch();
  dispatch(getTotal());

  const total = useSelector(selectTotal);
  if (cart.length === 0) return <Title title="Add products to the cart" />;

  return (
    <Row columns="1fr" justify="right">
      <h2>
        <small>Total: </small> $ {total.toFixed(2)}
      </h2>
      <Link to="/checkout">
        <Button>Proceed to checkout</Button>
      </Link>
    </Row>
  );
};

TotalCart.propTypes = {
  cart: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default TotalCart;
