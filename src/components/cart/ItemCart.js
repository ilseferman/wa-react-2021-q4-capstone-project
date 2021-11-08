import { useState } from 'react';
import {
  removeProduct,
  updateProduct,
} from '../../utils/redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { Row, ErrorSpan } from '../UI';

function ItemCart({ product }) {
  const { 
    amount: _amount, 
    mainimage, 
    name, 
    price, 
    stock 
  } = product;

  const [amount, setAmount] = useState(_amount);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newAmount = +event.target.value;
    setAmount(newAmount);
    if (newAmount > stock) {
      setError(`Not enough products available`);
    } else {
      setError(undefined);
      dispatch(updateProduct({ ...product, amount: newAmount }));
    }
  };

  return (
    <Row>
      <img src={mainimage} alt={name} />
      <h4>{name}</h4>
      <input
        type="number"
        min="1"
        max={stock}
        value={amount}
        onChange={handleChange}
      />
      <h4>$ {price}</h4>
      <h3>$ {(price * amount).toFixed(2)}</h3>
      <button
        className="remove"
        onClick={() => dispatch(removeProduct(product))}
      >
        <i className="fas fa-trash"></i> Remove
      </button>
      <br />
      {error && <ErrorSpan text={error} />}
    </Row>
  );
}
export default ItemCart;
