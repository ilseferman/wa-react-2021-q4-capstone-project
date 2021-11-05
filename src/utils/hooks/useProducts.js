import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAPI } from './useAPI';


export function useProducts() {
  const history = useHistory();
  
  const [categories, setCategories] = useState([]);  
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { 
    data: categoriesData, 
    isLoading: isLoadingCategories 
  } = useAPI( 'category', {pageSize: 30} );
  
  const [categoriesFilter, setCategoriesFilter] = useState(
    new URLSearchParams(history.location.search).getAll('category')
  );

  const { 
    data: productsData, 
    isLoading: isLoadingProducts 
  } = useAPI( 'product', { pageSize: 12, page });

  // Filter products by categories selected
  const filterProducts = useCallback(
    () => {      
      setTotalPages(+productsData?.total_pages);
      // if there are no active filters, return initial array of products
      if (categoriesFilter.length === 0) {
        return productsData?.results;
      } else {
        // filter products depending on current path params
        return productsData?.results?.filter((product) =>
          categoriesFilter.includes(product.data.category.slug)
        );
      }
    },
    [categoriesFilter, productsData],
  )

  // Set active categories depending on selected 
  const updateCategoriesState = useCallback(
    () => {      
      return categoriesData?.results?.map((category) => {
        return categoriesFilter.includes(category.slugs[0])
          ? { ...category, isActive: true }
          : { ...category, isActive: false };
      });
    },
    [categoriesData, categoriesFilter],
  )
  
  
  useEffect(() => {
    setCategories(updateCategoriesState);  
  }, [updateCategoriesState]);

  
 
  
  useEffect(() => {
    if (!isLoadingProducts && !isLoadingCategories) {
      setProducts(filterProducts);
    }
  }, [
    filterProducts,
    isLoadingCategories,
    isLoadingProducts,    
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
    
    // Update categories filter 
    setCategoriesFilter(new URLSearchParams(history.location.search).getAll('category'));    
  };

  const clearFilters = () => {
    history.push(`${history.location.pathname}`);
    setCategoriesFilter([]);
    // setUpdateCategories(true);
  };

  return {
    categories,
    categoriesFilter,
    clearFilters,
    handlerClickCategory,
    isLoadingCategories,
    isLoadingProducts,
    page,
    products,    
    setPage,
    totalPages,
  };
}
