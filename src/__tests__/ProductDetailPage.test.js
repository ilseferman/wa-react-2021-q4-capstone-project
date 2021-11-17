import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { API_BASE_URL } from '../utils/constants';
import * as ref from '../mocks/en-us/ref.json';
import * as product from '../mocks/en-us/product.json';

import store from '../utils/redux/store';
import AppProvider from '../utils/context';
import ProductDetail from '../pages/ProductDetail';
import { Header } from '../components/UI';
import ProductSearch from '../components/product/ProductSearch';

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

const ProductComponentWithHeader = function () {
  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <Header>
            <ProductSearch />
          </Header>
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

describe('Tests for the following scenarios in Product Detail Page', () => {
  afterAll(() => {
    cleanup();
  });

  test(`Product Detail Page is fetching and rendering data from the API for a 
    particular product.`, async () => {
    render(<ProductComponent />);
    const text = await screen.findByText('Grayton Armchair');
    expect(text).toBeInTheDocument();
  });

  test(`Product Detail Page contains the following labels: name of the selected 
  product, current price, SKU, category name, a list of description, and description.`, async () => {
    render(<ProductComponent />);
    const name = await screen.findByText('Grayton Armchair');
    expect(name).toBeInTheDocument();

    const price = await screen.findByText('$1689.74');
    expect(price).toBeInTheDocument();

    const SKU = await screen.findByText('SKU:1105659063');
    expect(SKU).toBeInTheDocument();

    const category = await screen.findByText('furniture');
    expect(category).toBeInTheDocument();

    const tags = await screen.findByText('Living Room');
    expect(tags).toBeInTheDocument();

    const description = await screen.findByText(
      'Inclined arm. The cushions are not removable. The kiln-dried, corner-locked rubber wood frame provides exceptional structural integrity. Kiln-dried wood helps prevent warping, splitting, cracking, and the development of mold. Premium quality, aniline dyed. The skin will soften and clear with use and the passage of time, developing an elegant patina. Leather is a natural product. Variations in color and texture are inherent to each skin; no two pieces are exactly alike. The cushion is supported by steel springs that do not sag. Fixed legs have a natural distressed finish. Polyester wrapped cushions for a firmer feel.'
    );
    expect(description).toBeInTheDocument();
  });

  test(`Product Detail Page contains a quantity selector and an “Add to Cart” 
  button.`, async () => {
    render(<ProductComponent />);

    const Quantity = await screen.findByPlaceholderText('amount');
    expect(Quantity).toBeInTheDocument();

    const Cart = await screen.findByText('Add to cart');
    expect(Cart).toBeInTheDocument();
  });

  test(`Validate that after clicking on the “Add to Cart” button, the number of 
  items that are selected in quantity selector control are added to the cart.`, async () => {
    render(<ProductComponentWithHeader />);
    // find input and set 3 of amout
    const input = await screen.findByPlaceholderText('amount');
    fireEvent.change(input, { target: { value: 3 } });

    // call click on add to cart button
    (await screen.findByText('Add to cart')).click();

    // search in header the 3 representing the amount added
    const ItemAdded = await screen.findByText('(3)');
    expect(ItemAdded).toBeInTheDocument();
  });

  test(`Validate that the “Add to Cart” button is disabled when the stock units
  available for the selected product is zero.`, async () => {
    render(<ProductComponent />);
    // set input value of amount to zero
    const input = await screen.findByPlaceholderText('amount');
    fireEvent.change(input, { target: { value: 0 } });

    // validate button is disabled
    const button = await screen.findByText('Add to cart');
    expect(button).toBeDisabled();
  });
});
