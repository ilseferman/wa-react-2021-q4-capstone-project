import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Footer } from './components/UI';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import styles from './App.module.css';
import ProductDetail from './pages/ProductDetail';
import { AppProvider } from './utils/context';
import SearchResults from './pages/SearchResults';
import ProductSearch from './components/product/ProductSearch';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className={styles.container}>
          <Header>
            <ProductSearch />
          </Header>
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
              <Route path="/search">
                <SearchResults />
              </Route>
              <Route path="/cart">
                <ShoppingCart />
              </Route>
              <Route path="/checkout">
                <Checkout />
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
