import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  removeProduct,
  updateProduct
} from '../../utils/redux/slices/cartSlice';
import { Row, ErrorSpan } from '../UI';

const ItemCart = function ({ product }) {
  const { amount: _amount, mainimage, name, price, stock } = product;

  const [amount, setAmount] = useState(_amount);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newAmount = +event.target.value;
    setAmount(newAmount);
    if (newAmount > stock) {
      setError('Not enough products available');
    } else {
      setError(undefined);
      dispatch(updateProduct({ ...product, amount: newAmount }));
    }
  };

  const handleRemove = () => dispatch(removeProduct(product));

  return (
    <Row>
      <img src={mainimage} alt={name} />
      <h4>{name}</h4>
      <input
        placeholder="quantity"
        type="number"
        min="1"
        max={stock}
        value={amount}
        onChange={handleChange}
      />
      <h4>${price}</h4>
      <h3>${(price * amount).toFixed(2)}</h3>
      <button type="button" className="remove" onClick={handleRemove}>
        <i className="fas fa-trash" /> Remove
      </button>
      <br />
      {error && <ErrorSpan text={error} />}
    </Row>
  );
};

ItemCart.propTypes = {
  product: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default ItemCart;
