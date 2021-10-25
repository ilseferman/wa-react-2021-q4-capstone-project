import React from 'react';

import ProductsGrid from './ProductsGrid';
import Section from '../UI/Section';
import { List } from '../UI/List';
import { Container, Sidebar, Content } from '../UI/Container';
import { useProducts } from './ProductHooks';
import Pagination from '../UI/Pagination';
import { Loading } from '../UI/Loading';

function ProductList() {
  const { categories, isLoading, products, handlerClickCategory } =
    useProducts();

  return (
    <>
      {isLoading && (
        <Loading>
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Loading>
      )}
      {!isLoading && (
        <Container>
          <Sidebar>
            <Section title="Categories">
              <List>
                {categories.map(({ id, data, isActive }) => (
                  <label
                    key={id}
                    className={isActive ? 'active' : ''}
                    onClick={() => handlerClickCategory(id)}
                  >
                    {isActive && <i className="fas fa-times"></i>} {data.name}
                  </label>
                ))}
              </List>
            </Section>
          </Sidebar>

          <Content>
            <ProductsGrid items={products} />
            <Pagination
              currentPage={2}
              pages={7}
              nextPage={true}
              prevPage={true}
            />
          </Content>
        </Container>
      )}
    </>
  );
}

export default ProductList;
