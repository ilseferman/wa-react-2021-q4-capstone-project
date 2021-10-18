import React from 'react';

import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <i className="fas fa-store-alt"></i>
          <h3>Brand</h3>
        </div>

        <ul className={styles.navItems}>
          <li>
            <input
              className={styles.search}
              type="text"
              placeholder="Search..."
            />
          </li>

          <li>
            <button className={styles.btn}>
              <i className="fas fa-shopping-cart"></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
