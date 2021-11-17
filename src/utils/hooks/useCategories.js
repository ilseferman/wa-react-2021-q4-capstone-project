import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAPI } from './useAPI';

export function useCategories() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const { data: categoriesData, isLoading: isLoadingCategories } = useAPI(
    'category',
    { pageSize: 30 }
  );

  const [categoriesSearch, setCategoriesSearch] = useState(
    new URLSearchParams(history.location.search).getAll('category')
  );

  // Set active categories depending on selected
  const updateCategoriesState = useCallback(
    () =>
      categoriesData?.results?.map((category) =>
        categoriesSearch.includes(category.slugs[0])
          ? { ...category, isActive: true }
          : { ...category, isActive: false }
      ),
    [categoriesData, categoriesSearch]
  );

  useEffect(() => {
    setCategories(updateCategoriesState);
  }, [updateCategoriesState]);

  const handlerClickCategory = (id) => {
    let filterPath = '';
    // remove category from path if exist
    if (categoriesSearch?.includes(id)) {
      const index = categoriesSearch.indexOf(id);
      categoriesSearch.splice(index, 1);
    } else {
      categoriesSearch.push(id);
    }

    categoriesSearch.forEach((category) => {
      const joinChar = filterPath === '' ? '?' : '&';
      filterPath += `${joinChar}category=${category}`;
    });

    // update path search params
    history.push(`${history.location.pathname}${filterPath}`);

    // Update categories filter
    setCategoriesSearch(
      new URLSearchParams(history.location.search).getAll('category')
    );
  };

  const clearFilters = () => {
    history.push(`${history.location.pathname}`);
    setCategoriesSearch([]);
  };

  return {
    categories,
    categoriesSearch,
    clearFilters,
    handlerClickCategory,
    isLoadingCategories
  };
}
