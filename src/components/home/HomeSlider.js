import React from 'react';
import { Slider, Loading } from '../UI';
import { useAPI } from '../../utils/hooks/useAPI';

const HomeSlider = function () {
  const { data: bannersData, isLoading: isLoadingBanners } = useAPI('banner', {
    pageSize: 5
  });

  if (isLoadingBanners) {
    return <Loading />;
  }

  return <Slider items={bannersData.results} />;
};

export default HomeSlider;
