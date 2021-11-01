import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Footer } from './components/UI';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import styles from './App.module.css';
import ProductDetail from './pages/ProductDetail';
import { AppProvider } from './utils/context';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className={styles.container}>
          <Header />
          <main>
            <Switch>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route exact path={['/', '/home']}>
                <Home />
              </Route>
              <Route path="/product/:id">
                <ProductDetail />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
