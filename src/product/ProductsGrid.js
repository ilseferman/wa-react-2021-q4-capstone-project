import React from 'react';
import Section from '../UI/Section';
import Wrapper from '../UI/Wrapper';
import ProductCard from './ProductCard';

function ProductsGrid({ items }) {
  return (
    <Section title="Products">
      <Wrapper>
        {items.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Wrapper>
    </Section>
  );
}

export default ProductsGrid;
