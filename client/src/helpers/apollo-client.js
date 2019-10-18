import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: '/api',
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