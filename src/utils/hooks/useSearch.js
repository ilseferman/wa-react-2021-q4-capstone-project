import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { useAPI } from './useAPI';

export function useSearch(searchTerm) {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { data: productsData, isLoading: isLoadingProducts } = useAPI(
    'product',
    { pageSize: 20, page, searchTerm }
  );

  useEffect(() => {
    if (!isLoadingProducts) {
      setTotalPages(+productsData.total_pages ?? 0);
      setProducts(productsData?.results);
    }
  }, [isLoadingProducts, productsData, location]);

  return {
    isLoadingProducts,
    page,
    products,
    setPage,
    totalPages
  };
}
