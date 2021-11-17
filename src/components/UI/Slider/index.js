import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SliderList, DotsWrapper, SliderItem, Dot } from './styles';

const Slider = function ({ items, product = false, autoSlide = true }) {
  const [activeSlider, setActiveSlider] = useState(0);

  // Effect to change slide automatically each 8 seconds
  useEffect(() => {
    if (autoSlide) {
      const id = setInterval(() => {
        setActiveSlider((prevIndex) =>
          prevIndex < items.length - 1 ? prevIndex + 1 : 0
        );
      }, 8000);
      return () => clearInterval(id);
    }
    return true;
  }, [activeSlider, items, autoSlide]);

  // Change the current image on the slider, depending on which dot clicked the user
  const handleDotClick = (id) => {
    setActiveSlider(items.findIndex((item) => item.id === id));
  };

  return (
    <>
      {/* list of images */}
      <SliderList product={product}>
        {items?.map(({ id, data }) => (
          <SliderItem isActive={id === items[activeSlider].id} key={id}>
            <img src={data?.main_image.url} alt={data.main_image.alt} />
          </SliderItem>
        ))}
      </SliderList>

      {/* dots menu */}
      <DotsWrapper>
        {items?.map(({ id }) => (
          <Dot
            onClick={() => handleDotClick(id)}
            isActive={id === items[activeSlider].id}
            key={id}
          />
        ))}
      </DotsWrapper>
    </>
  );
};

Slider.defaultProps = {
  product: false,
  autoSlide: true
};

Slider.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  product: PropTypes.bool,
  autoSlide: PropTypes.bool
};

export default Slider;
