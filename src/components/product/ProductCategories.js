import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Section, Wrapper } from '../UI/';
import PropTypes from 'prop-types';

function ProductCategories({ items }) {
  return (
    <Section title="Categories">
      <Wrapper cols={5}>
        {items?.map(({ id, data, slugs}) => (
          <Link
            to={{
              pathname: '/products',
              search: `?category=${slugs[0]}`,
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

ProductCategories.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ProductCategories;
