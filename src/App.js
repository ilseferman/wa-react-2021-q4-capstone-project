import React from 'react';

import styles from './App.module.css';
import HomePage from './home/HomePage';
import Footer from './UI/Footer';
import Header from './UI/Header';

function App() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main>
          <HomePage />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
