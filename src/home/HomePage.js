import React from 'react';
import { mockBanners } from '../mocks/featured-banners';
import { mockCategories } from '../mocks/product-categories';
import { mockProducts } from '../mocks/featured-products';
import Carousel from '../UI/Carousel';
import Slider from '../UI/Slider';
import ProductsGrid from '../product/ProductsGrid';

function HomePage() {
  const banners = mockBanners.results;
  const categories = mockCategories.results;
  const products = mockProducts.results;

  return (
    <>
      <Slider items={banners} />
      <Carousel items={categories} />
      <ProductsGrid items={products} />
    </>
  );
}

export default HomePage;
