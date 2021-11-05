import React from 'react';
import { useProducts } from '../utils/hooks/useProducts';
import { Container, Sidebar, Content } from '../components/UI/Container';
import { Section, List, Pagination, Loading, Button, Title } from '../components/UI/';
import ProductsGrid from '../components/product/ProductsGrid';
import useDocumentTitle from '../utils/hooks/useDocumentTitle';


function ProductList() {
  useDocumentTitle('Products');

  const  {
    products,
    categories,
    categoriesFilter,
    clearFilters,
    handlerClickCategory,
    isLoadingCategories,
    isLoadingProducts,
    page,
    setPage,
    totalPages,
  } = useProducts();
  
  if (isLoadingCategories || isLoadingProducts || !categories || !products)
    return <Loading />;

  return (
    <>
      <Container>
        <Sidebar>
          <Section title="Categories">
            <List>
              {categories?.map(({ id, data,slugs, isActive }) => (
                <label
                  key={id}
                  className={isActive ? 'active' : ''}
                  onClick={() => handlerClickCategory(slugs[0])}
                >
                  {isActive && <i className="fas fa-times"></i>} {data?.name}
                </label>
              ))}

              {categoriesFilter.length > 0 && (
                <Button small onClick={clearFilters}>
                  Clear filters
                </Button>
              )}
            </List>
          </Section>
        </Sidebar>

        <Content>
          <ProductsGrid items={products} cols={3} />
          
          {products.length === 0 && <Title title="No results" />}
          {products.length > 0 && 
            <Pagination
              currentPage={page}
              pages={totalPages}
              nextPage={page < totalPages}
              prevPage={page > 1}
              onNextPage={() => setPage((page) => page + 1)}
              onPrevPage={() => setPage((page) => page - 1)}
            />
          }
          
        </Content>
      </Container>
    </>
  );
}

export default ProductList;
