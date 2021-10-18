import React from 'react';
import styles from './Carousel.module.css';

function Carousel({ items }) {
  return (
    <div className={styles.carousel}>
      <h3>Categories</h3>
      <ul className={styles.scroller}>
        {items.map(({ id, data }) => (
          <li key={id}>
            <figure>
              <picture>
                <img
                  src={data.main_image.url}
                  alt={data.main_image.alt}
                  loading="lazy"
                />
              </picture>
              <figcaption>{data.name}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carousel;
