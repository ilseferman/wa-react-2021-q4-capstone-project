import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Slider, Button, Loading } from '../components/UI/';
import { useAPI } from '../utils/hooks/useAPI';
import ProductCategories from '../components/product/ProductCategories';
import ProductsGrid from '../components/product/ProductsGrid';
import { useAppContext } from '../utils/context';

function Home() {
  const { appContext, setAppContext } = useAppContext();

  useEffect(() => {
    setAppContext({
      title: 'Home',
    });
    document.title = appContext.title;
  }, [appContext.title, setAppContext]);

  const { data: bannersData, isLoading: isLoadingBanners } = useAPI('banner', {
    pageSize: 5,
  });

  const { data: categoriesData, isLoading: isLoadingCategories } = useAPI(
    'category',
    {
      pageSize: 30,
    }
  );

  const { data: productsData, isLoading: isLoadingProducts } = useAPI(
    'product',
    { pageSize: 16, page: 1, documentTags: ['Featured'] }
  );

  if (isLoadingBanners || isLoadingCategories || isLoadingProducts)
    return <Loading />;

  return (
    <>
      <Slider items={bannersData.results} />
      <ProductCategories items={categoriesData.results} />
      <ProductsGrid items={productsData.results} />
      <Link to="/products">
        <Button block>View all products</Button>
      </Link>
    </>
  );
}

export default Home;
