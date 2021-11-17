import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Loading } from '../components/UI';
import HomeSlider from '../components/home/HomeSlider';
import { useAPI } from '../utils/hooks/useAPI';
import CategoriesGrid from '../components/home/CategoriesGrid';
import ProductsGrid from '../components/product/ProductsGrid';
import useDocumentTitle from '../utils/hooks/useDocumentTitle';

const Home = function () {
  useDocumentTitle('Home');

  const { data: productsData, isLoading: isLoadingProducts } = useAPI(
    'product',
    { pageSize: 16, page: 1, documentTags: ['Featured'] }
  );

  if (isLoadingProducts) {
    return <Loading />;
  }

  return (
    <>
      <HomeSlider />
      <CategoriesGrid />
      <ProductsGrid items={productsData.results} />
      <Link to="/products">
        <Button block>View all products</Button>
      </Link>
    </>
  );
};

export default Home;
