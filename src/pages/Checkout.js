import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FormCheckout from '../components/checkout/FormCheckout';
import { Section, Row, Button } from '../components/UI';
import useDocumentTitle from '../utils/hooks/useDocumentTitle';
import { selectCart, selectTotal } from '../utils/redux/slices/cartSlice';

const Checkout = function () {
  useDocumentTitle('Shopping Cart');
  const cart = useSelector(selectCart);
  const total = useSelector(selectTotal);

  return (
    <Section title="Checkout">
      <Row columns="1fr 1fr">
        <Section title="Order summary">
          {cart.map((product) => (
            <Row key={product.id}>
              <p>{product.name}</p>
              <p>{product.amount}</p>
              <p>
                <strong>${product.amount * product.price}</strong>
              </p>
            </Row>
          ))}
          <Row columns="1fr">
            <h3>
              <small>Total: </small>${total}
            </h3>
          </Row>
          <Row columns="1fr 1fr">
            <Button>
              <Link to="/cart">Go back to cart</Link>
            </Button>
            <Button>Place order</Button>
          </Row>
        </Section>

        <FormCheckout />
      </Row>
    </Section>
  );
};

export default Checkout;
