import React from 'react';

import { Pagination, Loading, Title } from '../components/UI/';
import ProductsGrid from '../components/product/ProductsGrid';
import useDocumentTitle from '../utils/hooks/useDocumentTitle';
import { useSearch } from '../utils/hooks/useSearch';
import { useHistory } from 'react-router-dom';

function SearchResults() {
  
  const history = useHistory();
  const dataFilter = new URLSearchParams(history.location.search).getAll('q');
  useDocumentTitle(`Search ${dataFilter}`);

  const  {
    isLoadingProducts,
    page,
    products,    
    setPage,
    totalPages,
  } = useSearch(dataFilter);
  if ( isLoadingProducts || !products)
  return <Loading />;
  
  return (
    <>
      <ProductsGrid items={products} cols={4} title={`Search ${dataFilter}`} desc />
      {products.length === 0 && <Title title="No results found" />}
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
      
    </>
  );
}

export default SearchResults;
