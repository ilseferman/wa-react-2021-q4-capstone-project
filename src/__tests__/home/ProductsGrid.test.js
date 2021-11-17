import React from 'react';
import { render } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { API_BASE_URL } from '../../utils/constants';
import * as featuredProducts from '../../mocks/en-us/featured-products.json';
import * as ref from '../../mocks/en-us/ref.json';

import store from '../../utils/redux/store';
import AppProvider from '../../utils/context';

import Home from '../../pages/Home';

const handlers = [
  // simulate api call of useLastestAPI
  rest.get(`${API_BASE_URL}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(ref))
  ),

  // simulate api call of useAPI of featuredProducts
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(featuredProducts))
  )
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Featured Products Grid is fetching and rendering data from the API', async () => {
  const { findByText, findByAltText } = render(
    <Provider store={store}>
      <AppProvider>
        <Router>
          <Home />
        </Router>
      </AppProvider>
    </Provider>
  );

  expect(await findByText('Grayton Armchair')).toBeInTheDocument();
  expect(await findByAltText('Grayton Armchair')).toBeInTheDocument();
});
