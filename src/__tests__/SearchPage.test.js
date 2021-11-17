import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { API_BASE_URL } from '../utils/constants';
import * as ref from '../mocks/en-us/ref.json';
import * as products from '../mocks/en-us/search-chair.json';
import * as productsEmpty from '../mocks/en-us/empty-results.json';
import store from '../utils/redux/store';
import AppProvider from '../utils/context';
import SearchResults from '../pages/SearchResults';
import { Header } from '../components/UI';
import ProductSearch from '../components/product/ProductSearch';

const SearchPageComponent = function () {
  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <Header>
            <ProductSearch />
          </Header>
          <SearchResults />
        </Router>
      </AppProvider>
    </Provider>
  );
};
const productEmptyHandler = [
  // simulate api call of useAPI of products
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(productsEmpty))
  )
];

const handlers = [
  // simulate api call of useLastestAPI
  rest.get(`${API_BASE_URL}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(ref))
  ),

  // simulate api call of useAPI of products
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(products))
  )
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Tests for the following scenarios in Search Results Page', () => {
  afterAll(() => {
    cleanup();
  });

  test(`Validate that the list of results is rendering data according to the “searchTerm” provided.`, async () => {
    render(<SearchPageComponent />);
    const input = await screen.findByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'chair' } });

    const searchText = await screen.findByText('Studded Armchair Irving');
    expect(searchText).toBeInTheDocument();
  });

  test(`Validate that an empty state is displayed when there are no results for the “searchTerm” provided.`, async () => {
    server.use(...productEmptyHandler);
    render(<SearchPageComponent />);
    const input = await screen.findByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test' } });

    const text = await screen.findByText('No results found');
    expect(text).toBeInTheDocument();
  });
});
