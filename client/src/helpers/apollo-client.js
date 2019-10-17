import ApolloClient from 'apollo-boost';

// in production mode we can use the API directly
// otherwise the dev server is setup to proxy through /api
const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production' ? 'https://api.yelp.com/v3/graphql' : '/api',
  request: (operation) => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${process.env.GRAPHQL_API_KEY}`,
        'Accept-Language': 'en_US'
      }
    });
  }
});

export default client;