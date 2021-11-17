import React from 'react';
import { useSelector } from 'react-redux';

import ItemCart from '../components/cart/ItemCart';
import TotalCart from '../components/cart/TotalCart';
import { Section } from '../components/UI';
import useDocumentTitle from '../utils/hooks/useDocumentTitle';
import { selectCart } from '../utils/redux/slices/cartSlice';

const ShoppingCart = function () {
  useDocumentTitle('Shopping Cart');
  const cart = useSelector(selectCart);

  return (
    <Section title="Shopping Cart">
      <br />
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <TotalCart cart={cart} />
    </Section>
  );
};

export default ShoppingCart;
