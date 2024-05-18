import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql', // Replace with your deployed backend URL
  cache: new InMemoryCache(),
});

const ApolloProvider = ({ children }) => (
  <Provider client={client}>{children}</Provider>
);

export default ApolloProvider;
