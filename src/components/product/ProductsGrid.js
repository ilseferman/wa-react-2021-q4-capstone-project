import React from 'react';
import ProductCard from './ProductCard';
import { Section, Wrapper } from '../UI/';

function ProductsGrid({ items, cols = 4 }) {
  return (
    <Section title="Products">
      <Wrapper cols={cols}>
        {items?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Wrapper>
    </Section>
  );
}

export default ProductsGrid;
