import { useState } from 'react';
import { mockCategories } from '../mocks/product-categories';
import { mockProducts } from '../mocks/featured-products';

export function useProducts() {
  // set initial data
  const initialProducts = mockProducts.results;
  const initialCategories = mockCategories.results.map((category) => {
    // add isActive property to manage active state in categories
    return { ...category, isActive: false };
  });

  const [products, setProducts] = useState(initialProducts);
  const [categories, setCategories] = useState(initialCategories);
  const [isLoading, setIsLoading] = useState(true);

  // loading simulation
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  const handlerClickCategory = (id) => {
    setCategories((prevCategories) => {
      // array to implement includes on filter
      let categoriesActiveIds = [];

      let newCategories = prevCategories.map((category) => {
        // update isActive to opposite boolean state of the clicked id
        let updatedCategory =
          category.id === id
            ? { ...category, isActive: !category.isActive }
            : category;

        // add id to active categories array if category is active
        if (updatedCategory.isActive) {
          categoriesActiveIds.push(updatedCategory.id);
        }

        return updatedCategory;
      });

      // if there are no active filters, return initial array of products
      if (categoriesActiveIds.length === 0) {
        setProducts(initialProducts);
      } else {
        // filter products depending on isActive:true in categories
        const filteredProducts = initialProducts.filter((product) =>
          categoriesActiveIds.includes(product.data.category.id)
        );
        setProducts(filteredProducts);
      }

      return newCategories;
    });
  };

  return {
    categories,
    isLoading,
    products,
    handlerClickCategory,
  };
}
