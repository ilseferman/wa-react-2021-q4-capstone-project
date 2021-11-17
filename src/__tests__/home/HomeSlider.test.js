import React from 'react';
import { render, screen } from '@testing-library/react';

import { setupServer } from 'msw/node';
import { rest } from 'msw';

import { API_BASE_URL } from '../../utils/constants';
import * as featuredBanners from '../../mocks/en-us/featured-banners.json';
import * as ref from '../../mocks/en-us/ref.json';

import HomeSlider from '../../components/home/HomeSlider';

const handlers = [
  // simulate api call of useLastestAPI
  rest.get(`${API_BASE_URL}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(ref))
  ),

  // simulate api call of useAPI of featuderBanners
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(featuredBanners))
  )
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Featured Banners Slider is fetching and rendering data from the API', async () => {
  render(<HomeSlider />);
  const imageAlt = await screen.findByAltText('AMAZING FINISHES - BEDROOM');
  expect(imageAlt).toBeInTheDocument();
});
