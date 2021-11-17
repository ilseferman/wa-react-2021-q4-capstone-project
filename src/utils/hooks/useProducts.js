import { useCallback, useEffect, useState } from 'react';

import { useAPI } from './useAPI';

export function useProducts(categoriesSearch, isLoadingCategories) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { data: productsData, isLoading: isLoadingProducts } = useAPI(
    'product',
    { pageSize: 12, page }
  );

  // Filter products by categories selected
  const filterProducts = useCallback(() => {
    setTotalPages(+productsData.total_pages ?? 0);
    // if there are no active filters, return initial array of products
    if (categoriesSearch.length === 0) {
      return productsData?.results;
    }
    // filter products depending on current path params
    return productsData?.results?.filter((product) =>
      categoriesSearch.includes(product.data.category?.slug)
    );
  }, [categoriesSearch, productsData]);

  useEffect(() => {
    if (!isLoadingProducts && !isLoadingCategories) {
      setProducts(filterProducts);
    }
  }, [filterProducts, isLoadingCategories, isLoadingProducts]);

  return {
    isLoadingProducts,
    page,
    products,
    setPage,
    totalPages
  };
}
