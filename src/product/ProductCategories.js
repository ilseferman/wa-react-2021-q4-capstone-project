import React from 'react';
import Card from '../UI/Card';
import Section from '../UI/Section';
import Wrapper from '../UI/Wrapper';

function ProductCategories({ items }) {
  return (
    <Section title="Categories">
      <Wrapper cols={5}>
        {items.map(({ id, data }) => (
          <Card key={id} >
            <img src={data.main_image.url} alt={data.main_image.alt} />
            <label className="label-center">{data.name}</label>
          </Card>
        ))}
      </Wrapper>
    </Section>
  );
}

export default ProductCategories;
