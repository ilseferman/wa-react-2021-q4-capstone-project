import React from 'react';
import { useProducts } from '../utils/hooks/useProducts';
import { Container, Sidebar, Content } from '../components/UI/Container';
import {
  Section,
  List,
  Pagination,
  Loading,
  Button,
  Title
} from '../components/UI';
import ProductsGrid from '../components/product/ProductsGrid';
import useDocumentTitle from '../utils/hooks/useDocumentTitle';
import { useCategories } from '../utils/hooks/useCategories';

const ProductList = function () {
  useDocumentTitle('Products');
  const {
    categories,
    categoriesSearch,
    clearFilters,
    handlerClickCategory,
    isLoadingCategories
  } = useCategories();

  const { products, isLoadingProducts, page, setPage, totalPages } =
    useProducts(categoriesSearch, isLoadingCategories);

  if (isLoadingCategories || !categories || isLoadingProducts || !products) {
    return <Loading />;
  }

  return (
    <Container>
      <Sidebar>
        <Section title="Categories">
          <List>
            {categories?.map(({ id, data, slugs, isActive }) => (
              <button
                type="button"
                key={id}
                className={isActive ? 'active' : ''}
                onClick={() => handlerClickCategory(slugs[0])}
              >
                {isActive && <i className="fas fa-times" />} {data?.name}
              </button>
            ))}

            {categoriesSearch.length > 0 && (
              <Button small onClick={clearFilters}>
                Clear filters
              </Button>
            )}
          </List>
        </Section>
      </Sidebar>

      <Content>
        {products && <ProductsGrid items={products} cols={3} />}

        {products.length === 0 && <Title title="No results" />}
        {products.length > 0 && (
          <Pagination
            currentPage={page}
            pages={totalPages}
            nextPage={page < totalPages}
            prevPage={page > 1}
            onNextPage={() => setPage((nextPage) => nextPage + 1)}
            onPrevPage={() => setPage((prevPage) => prevPage - 1)}
          />
        )}
      </Content>
    </Container>
  );
};

export default ProductList;
