import React from 'react';
import { mockBanners } from '../mocks/featured-banners';
import { mockCategories } from '../mocks/product-categories';
import { mockProducts } from '../mocks/featured-products';
import ProductCategories from '../product/ProductCategories';
import Slider from '../UI/Slider';

import ProductsGrid from '../product/ProductsGrid';
import { Button } from '../UI/Button';

function HomePage({ onPageChange }) {
  const banners = mockBanners.results;
  const categories = mockCategories.results;
  const products = mockProducts.results;

  return (
    <>
      <Slider items={banners} />
      <ProductCategories items={categories} />
      <ProductsGrid items={products} />
      <Button onClick={() => onPageChange('ProductList')}>
        View all products
      </Button>
    </>
  );
}

export default HomePage;
