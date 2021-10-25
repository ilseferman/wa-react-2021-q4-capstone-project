import React from 'react';
import Card from '../UI/Card';

function ProductCard({ product }) {
  const { data } = product;
  return (
    <Card padding="1.4rem">
      <img src={data.mainimage.url} alt={data.mainimage.alt} />
      <span className="category">{data.category.slug}</span>
      <p className="price">$ {data.price}</p>
      <label className="label-left">{data.name}</label>
    </Card>
  );
}

export default ProductCard;
