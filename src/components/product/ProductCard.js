import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from '../UI/';

function ProductCard({ product }) {
  const { data } = product;
  
  return (
    <Link to={`/product/${product.id}`}>
      <Card padding="1.4rem">
        <img src={data.mainimage.url} alt={data.mainimage.alt} />
        <span className="category">{data.category.slug}</span>
        <p className="price">$ {data.price}</p>
        <label className="label-left">{data.name}</label>
        <Button>Add to cart </Button>
      </Card>
    </Link>
  );
}

export default ProductCard;
