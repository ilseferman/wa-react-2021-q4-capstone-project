import React from 'react';
import { Link } from 'react-router-dom';
import { useAPI } from '../../utils/hooks/useAPI';
import { Card, Section, Wrapper, Loading } from '../UI';

const CategoriesGrid = function () {
  const { data: categoriesData, isLoading: isLoadingCategories } = useAPI(
    'category',
    {
      pageSize: 30
    }
  );

  if (isLoadingCategories || !categoriesData.results) {
    return <Loading />;
  }
  return (
    <Section title="Categories">
      <Wrapper cols={5}>
        {categoriesData.results?.map(({ id, data, slugs }) => (
          <Link
            to={{
              pathname: '/products',
              search: `?category=${slugs[0]}`
            }}
            key={id}
          >
            <Card>
              <img src={data?.main_image.url} alt={data.main_image.alt} />
              <label className="label-center">{data.name}</label>
            </Card>
          </Link>
        ))}
      </Wrapper>
    </Section>
  );
};

export default CategoriesGrid;
