import React from 'react';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  const { data } = product;
  return (
    <div className={styles.productCard}>
      <img src={data.mainimage.url} alt={data.mainimage.alt} />
      <h3>{data.name}</h3>
      <p>$ {data.price}</p>
    </div>
  );
}

export default ProductCard;
