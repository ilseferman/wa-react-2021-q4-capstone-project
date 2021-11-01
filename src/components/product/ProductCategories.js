import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Section, Wrapper } from '../UI/';

function ProductCategories({ items }) {
  return (
    <Section title="Categories">
      <Wrapper cols={5}>
        {items?.map(({ id, data }) => (
          <Link
            to={{
              pathname: '/products',
              search: `?category=${id}`,
            }}
            key={id}
          >
            <Card>
              <img src={data.main_image.url} alt={data.main_image.alt} />
              <label className="label-center">{data.name}</label>
            </Card>
          </Link>
        ))}
      </Wrapper>
    </Section>
  );
}

export default ProductCategories;
