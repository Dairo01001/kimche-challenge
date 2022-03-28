import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from '@apollo/client';

import './index.css';
import App from './App';
import config from './config';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: config.URI,
  }),
});

const rootElement = document.getElementById('root');
render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement,
);
