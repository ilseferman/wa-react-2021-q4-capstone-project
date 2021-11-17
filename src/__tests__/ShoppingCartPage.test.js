import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { API_BASE_URL } from '../utils/constants';
import * as ref from '../mocks/en-us/ref.json';
import * as product from '../mocks/en-us/product.json';
import store from '../utils/redux/store';
import AppProvider from '../utils/context';
import ShoppingCart from '../pages/ShoppingCart';
import { Header } from '../components/UI';
import ProductSearch from '../components/product/ProductSearch';
import ProductDetail from '../pages/ProductDetail';

const ShoppingCartPageComponent = function () {
  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <Header>
            <ProductSearch />
          </Header>
          <ShoppingCart />
        </Router>
      </AppProvider>
    </Provider>
  );
};

const ProductComponent = function () {
  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <ProductDetail />
        </Router>
      </AppProvider>
    </Provider>
  );
};
const handlers = [
  // simulate api call of useLastestAPI
  rest.get(`${API_BASE_URL}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(ref))
  ),

  // simulate api call of useAPI of product
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(product))
  )
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Tests for the following scenarios in Shopping Cart Page', () => {
  afterAll(() => {
    cleanup();
  });

  test(`Validate that an empty state is displayed when there are no items in the cart.`, async () => {
    render(<ShoppingCartPageComponent />);

    const text = await screen.findByText('Add products to the cart');
    expect(text).toBeInTheDocument();
  });

  test(` Validate that the list of products is shown when there are items in the cart. Each row should contain the main
  image of the product, its name, unit price, a quantity selector, subtotal and a “remove from cart icon”`, async () => {
    // Add a product in the cart
    render(<ProductComponent />);
    (await screen.findByText('Add to cart')).click();

    render(<ShoppingCartPageComponent />);
    const image = await screen.findByAltText('Grayton Armchair');
    expect(image).toBeInTheDocument();

    const name = await screen.findAllByText('Grayton Armchair');
    expect(name).toHaveLength(2);

    const price = await screen.findAllByText('$1689.74');
    expect(price).toHaveLength(3);

    const quantityInput = await screen.findByPlaceholderText('quantity');
    expect(quantityInput).toBeInTheDocument();

    fireEvent.change(quantityInput, { target: { value: 2 } });

    const subtotal = await screen.findByText('$3379.48');
    expect(subtotal).toBeInTheDocument();

    const remove = await screen.findByText('Remove');
    expect(remove).toBeInTheDocument();
  });

  test(`Validate that the cart total label displays the sum of the subtotals of
  all items in the cart.`, async () => {
    // Add a product in the cart
    render(<ProductComponent />);
    (await screen.findByText('Add to cart')).click();

    render(<ShoppingCartPageComponent />);

    const quantityInput = await screen.findByPlaceholderText('quantity');
    expect(quantityInput).toBeInTheDocument();

    fireEvent.change(quantityInput, { target: { value: 8 } });

    const subtotal = await screen.findByText('$13517.92');
    expect(subtotal).toBeInTheDocument();
  });

  test(`Validate that you can update the quantity of items for a particular
  product in the cart. Don’t forget to validate that you don’t exceed the stock
  units available for the selected product.`, async () => {
    // Add a product in the cart
    render(<ProductComponent />);
    (await screen.findByText('Add to cart')).click();

    render(<ShoppingCartPageComponent />);

    const quantityInput = await screen.findByPlaceholderText('quantity');
    expect(quantityInput).toBeInTheDocument();

    fireEvent.change(quantityInput, { target: { value: 8 } });

    const subtotal = await screen.findByText('$13517.92');
    expect(subtotal).toBeInTheDocument();

    fireEvent.change(quantityInput, { target: { value: 9 } });
    const errorMessage = await screen.findByText(
      'Not enough products available'
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test(`Validate that you can remove a product from the cart after clicking on
  the “remove from cart icon”`, async () => {
    // Add a product in the cart
    render(<ProductComponent />);
    (await screen.findByText('Add to cart')).click();

    render(<ShoppingCartPageComponent />);
    // Remove product from the cart
    (await screen.findByText('Remove')).click();
    const text = await screen.findByText('Add products to the cart');
    expect(text).toBeInTheDocument();
  });
});
