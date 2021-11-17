import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, ErrorSpan } from '../UI';
import { useProductDetail } from '../../utils/hooks/useProductDetail';

const ProductDetailCard = function ({ product }) {
  const {
    data: {
      name,
      price,
      category: { slug },
      sku,
      description,
      specs
    }
  } = product;

  const { stock, amount, handleChange, error, addToCart, disabled } =
    useProductDetail(product);

  return (
    <Card padding="2rem" cursor="auto">
      <h2>{name}</h2>

      <p className="price">${price}</p>
      <span className="category">{slug}</span>
      <p>
        SKU:
        {sku}
      </p>
      <p className="tags">
        {product.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </p>

      <label htmlFor="amount">Amount </label>
      <input
        id="amount"
        type="number"
        min="0"
        placeholder="amount"
        max={stock}
        value={amount}
        onChange={handleChange}
      />
      {error && <ErrorSpan text={error} />}

      <Button id="btnAddCart" onClick={addToCart} disabled={disabled}>
        Add to cart
      </Button>

      <p className="description">{description[0].text}</p>

      <h4>Specs</h4>
      <table>
        <tbody>
          {specs.map(({ spec_name: specName, spec_value: specValue }) => (
            <tr key={specName}>
              <td>{specName}</td>
              <td>{specValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

ProductDetailCard.propTypes = {
  product: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default ProductDetailCard;
