import React from 'react';
import { Card, Button } from '../UI/';

function ProductDetailCard({ product }) {
  return (
    <Card padding="2rem" cursor="auto">
      <h2>{product.data?.name}</h2>

      <p className="price">$ {product.data?.price}</p>
      <span className="category">{product.data?.category?.slug}</span>
      <p>SKU: {product?.data?.sku}</p>
      <p className="tags">
        {product?.tags?.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </p>
      <p className="description">{product?.data?.description[0].text}</p>
      <label htmlFor="amount">Amount </label>
      <input id="amount" type="number" min="0" />
      <Button>Add to cart </Button>
      <h4>Specs</h4>
      <table>
        <tbody>
          {product.data?.specs.map(({ spec_name, spec_value }) => (
            <tr key={spec_name}>
              <td>{spec_name}</td>
              <td>{spec_value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default ProductDetailCard;
