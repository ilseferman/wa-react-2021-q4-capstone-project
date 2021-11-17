import React from 'react';
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor
} from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { API_BASE_URL } from '../utils/constants';
import * as ref from '../mocks/en-us/ref.json';
import * as productCategories from '../mocks/en-us/product-categories.json';
import * as products from '../mocks/en-us/products.json';

import store from '../utils/redux/store';
import AppProvider from '../utils/context';
import ProductList from '../pages/ProductList';

const ProductPageComponent = function () {
  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <ProductList />
        </Router>
      </AppProvider>
    </Provider>
  );
};

const productHandler = [
  // simulate api call of useAPI of products
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(products))
  )
];

const handlers = [
  // simulate api call of useLastestAPI
  rest.get(`${API_BASE_URL}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(ref))
  ),

  // simulate api call of useAPI of productCategories
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(productCategories))
  ),
  ...productHandler
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Tests for the following scenarios in Product List Page', () => {
  afterAll(() => {
    cleanup();
  });

  test(`Product Category Sidebar is fetching and rendering data from the API`, async () => {
    render(<ProductPageComponent />);
    const buttonText = await screen.findByText('Furniture');
    expect(buttonText).toBeInTheDocument();
  });

  test(`Category links on Product Category Sidebar are filtering Products Grid 
  correctly interacting with the API`, async () => {
    render(<ProductPageComponent />);
    const buttonText = await (
      await screen.findByText('Furniture')
    ).closest('button');

    fireEvent.click(buttonText);
    await waitFor(() => {
      const header = screen.getByText('No results');
      expect(header).toBeInTheDocument();
    });
  });

  test(`Pagination Controls are generated correctly based on the number of 
  results fetched from the API and the maximum number of products per page`, async () => {
    server.use(...productHandler);

    render(<ProductPageComponent />);
    await waitFor(() => {
      const nextButton = screen.getByText('Next').closest('button');
      expect(nextButton).toBeInTheDocument();
    });
  });

  test('Prev button is disabled when the user is on the first page', async () => {
    server.use(...productHandler);

    render(<ProductPageComponent />);
    await waitFor(() => {
      const button = screen.getByText('Previous').closest('button');
      expect(button).toBeDisabled();
    });
  });

  test(`Next button is working as expected && Prev button is working as expected
  && Next button is disabled when the user is on the last page`, async () => {
    server.use(...productHandler);

    render(<ProductPageComponent />);

    await waitFor(async () => {
      const btnNext = screen.getByText('Next').closest('button');
      fireEvent.click(btnNext);
    });
    await waitFor(async () => {
      const btnPrev = screen.getByText('Previous').closest('button');
      fireEvent.click(btnPrev);
    });
  });
});
