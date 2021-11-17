import React from 'react';
import { render } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';

import { API_BASE_URL } from '../../utils/constants';
import * as productCategories from '../../mocks/en-us/product-categories.json';
import * as ref from '../../mocks/en-us/ref.json';

import CategoriesGrid from '../../components/home/CategoriesGrid';

const handlers = [
  // simulate api call of useLastestAPI
  rest.get(`${API_BASE_URL}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(ref))
  ),

  // simulate api call of useAPI of productCategories
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(productCategories))
  )
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Categories Carousel/Grid is fetching and rendering data from the API', async () => {
  const { findByAltText, findByText } = render(
    <BrowserRouter>
      <CategoriesGrid />
    </BrowserRouter>
  );
  expect(await findByAltText('Furniture')).toBeInTheDocument();
  expect(await findByText('Bed & Bath')).toBeInTheDocument();
  expect(await findByText('Furniture')).toBeInTheDocument();
  expect(await findByText('Lighting')).toBeInTheDocument();
  expect(await findByText('Kitchen')).toBeInTheDocument();
  expect(await findByText('Furniture')).toBeInTheDocument();
  expect(await findByText('Decorate & Organize')).toBeInTheDocument();
});
