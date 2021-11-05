import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from '../UI/';
import PropTypes from 'prop-types';

function ProductCard({ product, desc }) {
  const { data } = product;
  
  return (
    <Link to={`/product/${product.id}`}>
      <Card padding="1.4rem">
        <img src={data.mainimage.url} alt={data.mainimage.alt} />
        <span className="category">{data.category.slug}</span>
        <p className="price">$ {data.price}</p>
        <label className="label-left">{data.name}</label>
        {desc && <p className="shortDesc">{data.short_description}</p>}
        <Button>Add to cart </Button>
      </Card>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  desc: PropTypes.bool,
}

export default ProductCard;

