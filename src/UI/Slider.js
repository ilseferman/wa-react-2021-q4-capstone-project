import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';

function Slider({ items }) {
  const [activeSlider, setActiveSlider] = useState(0);

  // Effect to change slide automatically each 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlider((prevIndex) =>
        prevIndex < items.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(id);
  }, [activeSlider, items]);

  // Change the current image on the slider, depending on which dot clicked the user
  const handleDotClick = (id) => {
    setActiveSlider(items.findIndex((item) => item.id === id));
  };

  return (
    <>
      {/* list of images */}
      <div className={styles.slider}>
        {items.map(({ id, data }) => (
          <div
            className={`${
              id === items[activeSlider].id ? styles.itemActive : styles.item
            } ${styles.sliderEffect}`}
            key={id}
          >
            <img src={data.main_image.url} alt={data.main_image.alt} />
          </div>
        ))}
      </div>

      {/* dots menu */}
      <div className={styles.dots}>
        {items.map(({ id }) => (
          <span
            onClick={() => handleDotClick(id)}
            className={`${id === items[activeSlider].id && styles.active} ${
              styles.dot
            }`}
            key={id}
          ></span>
        ))}
      </div>
    </>
  );
}
export default Slider;
