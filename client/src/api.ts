import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:5001/graphql', // Replace with your GraphQL endpoint
});

const authLink = setContext((_, { headers }) => {
  // Add authorization token to headers if needed
  return {
    headers: {
      ...headers,
      authorization: 'Bearer your-auth-token' || '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
