import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: '/api',
  request: (operation) => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        'Accept-Language': 'en_US'
      }
    });
  }
});

export default client;