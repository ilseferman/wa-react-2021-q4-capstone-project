import React, { useState } from 'react';

import styles from './App.module.css';

import Header from './UI/Header/';
import HomePage from './home/HomePage';
import ProductList from './product/ProductList';
import Footer from './UI/Footer/';

function App() {
  const [currentPage, setCurrentPage] = useState('HomePage');
  const handleChangePage = (page) => setCurrentPage(page);

  return (
    <>
      <div className={styles.container}>
        <Header onPageChange={handleChangePage} />
        <main>
          {currentPage === 'HomePage' && (
            <HomePage onPageChange={handleChangePage} />
          )}
          {currentPage === 'ProductList' && <ProductList />}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
