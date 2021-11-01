import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAPI } from '../utils/hooks/useAPI';
import { Container, Sidebar, Content } from '../components/UI/Container';
import { Section, List, Pagination, Loading, Button } from '../components/UI/';
import ProductsGrid from '../components/product/ProductsGrid';
import { useAppContext } from '../utils/context';

function ProductList() {
  const { appContext, setAppContext } = useAppContext();

  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [updateCategories, setUpdateCategories] = useState(true);
  const [page, setPage] = useState(1);

  const { data: categoriesData, isLoading: isLoadingCategories } = useAPI(
    'category',
    {
      pageSize: 30,
    }
  );
  const { data: productsData, isLoading: isLoadingProducts } = useAPI(
    'product',
    {
      pageSize: 12,
      page,
    }
  );
  const [categoriesFilter, setCategoriesFilter] = useState(
    new URLSearchParams(history.location.search).getAll('category')
  );
  // useEffect(() => {
  //   setAppContext({
  //     title: 'Product List',
  //   });
  //   document.title = appContext.title;
  // }, []);

  useEffect(() => {
    if (!isLoadingProducts && !isLoadingCategories) {
      if (updateCategories) {
        setCategories(() => {
          return categoriesData?.results?.map((category) => {
            return categoriesFilter.includes(category.id)
              ? { ...category, isActive: true }
              : { ...category, isActive: false };
          });
        });
        setUpdateCategories(false);
      }

      setProducts(() => {
        // if there are no active filters, return initial array of products
        if (categoriesFilter.length === 0) {
          return productsData?.results;
        } else {
          // filter products depending on current path params
          return productsData?.results?.filter((product) =>
            categoriesFilter.includes(product.data.category.id)
          );
        }
      });

      setAppContext({
        title: 'Products',
      });
      document.title = appContext.title;
    }
  }, [
    categoriesData,
    productsData,
    isLoadingCategories,
    isLoadingProducts,
    categories,
    categoriesFilter,
    updateCategories,
    appContext.title,
    setAppContext,
  ]);

  const handlerClickCategory = (id) => {
    let filterPath = '';
    // remove category from path if exist
    if (categoriesFilter?.includes(id)) {
      const index = categoriesFilter.indexOf(id);
      categoriesFilter.splice(index, 1);
    } else {
      categoriesFilter.push(id);
    }

    categoriesFilter.forEach((category) => {
      const joinChar = filterPath === '' ? '?' : '&';
      filterPath += `${joinChar}category=${category}`;
    });

    // update path search params
    history.push(`${history.location.pathname}${filterPath}`);
    setUpdateCategories(true);
  };

  const clearFilters = () => {
    history.push(`${history.location.pathname}`);
    setCategoriesFilter([]);
    setUpdateCategories(true);
  };

  if (isLoadingCategories || isLoadingProducts || !categories || !products)
    return <Loading />;

  return (
    <>
      <Container>
        <Sidebar>
          <Section title="Categories">
            <List>
              {categories?.map(({ id, data, isActive }) => (
                <label
                  key={id}
                  className={isActive ? 'active' : ''}
                  onClick={() => handlerClickCategory(id)}
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
          <Pagination
            currentPage={page}
            pages={+productsData.total_pages}
            nextPage={page < +productsData.total_pages}
            prevPage={page > 1}
            onNextPage={() => setPage((page) => page + 1)}
            onPrevPage={() => setPage((page) => page - 1)}
          />
        </Content>
      </Container>
    </>
  );
}

export default ProductList;
