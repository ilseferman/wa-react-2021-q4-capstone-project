import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { Section, Wrapper } from '../UI';

const ProductsGrid = function ({
  items,
  cols = 4,
  title = 'Products',
  desc = false
}) {
  return (
    <Section title={title}>
      <Wrapper cols={cols}>
        {items?.map((product) => (
          <ProductCard product={product} key={product.id} desc={desc} />
        ))}
      </Wrapper>
    </Section>
  );
};

ProductsGrid.defaultProps = {
  cols: 4,
  title: 'Products',
  desc: false
};

ProductsGrid.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  cols: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.bool
};

export default ProductsGrid;
