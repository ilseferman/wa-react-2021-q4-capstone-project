import React from 'react';
import styles from './ProductsGrid.module.css';
import ProductCard from './ProductCard';

function ProductsGrid({ items }) {
  return (
    <div className={styles.products}>
      <h3>Products</h3>
      <div className={styles.wrapper}>
        {items.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsGrid;
