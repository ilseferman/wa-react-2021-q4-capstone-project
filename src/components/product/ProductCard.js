import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Button } from '../UI';

const ProductCard = function ({ product, desc }) {
  const {
    id,
    data: {
      // mainimage: { url, alt },
      mainimage,
      category,
      price,
      name,
      short_description: shortDescription
    }
  } = product;

  return (
    <Link to={`/product/${id}`}>
      <Card padding="1.4rem">
        <img src={mainimage?.url} alt={mainimage?.alt} />
        <span className="category">{category?.slug}</span>
        <p className="price">${price}</p>
        <label className="label-left">{name}</label>
        {desc && <p className="shortDesc">{shortDescription}</p>}
        <Button>Add to cart </Button>
      </Card>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  desc: PropTypes.bool.isRequired
};

export default ProductCard;
