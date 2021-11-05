import React from 'react';
import ProductCard from './ProductCard';
import { Section, Wrapper } from '../UI/';
import PropTypes from 'prop-types';

function ProductsGrid({ items, cols = 4, title = "Products", desc = false }) {
  return (
    <Section title={title}>
      <Wrapper cols={cols}>
        {items?.map((product) => (
          <ProductCard product={product} key={product.id} desc={desc} />
        ))}
      </Wrapper>
    </Section>
  );
}

ProductsGrid.propTypes = {
  items: PropTypes.array.isRequired,
  cols: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.bool,
}

export default ProductsGrid;
