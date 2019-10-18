import ApolloClient from 'apollo-boost';

const headers = () => {
  const headers = {
    'Accept-Language': 'en_US'
  };
  // If we're running locally we need to add auth header here
  // in prod, this gets added by the Lambda on our behalf
  if (process.env.API_TOKEN) {
    headers.Authorization = `Bearer ${process.env.API_TOKEN}`;
  }

  return headers;
}
const client = new ApolloClient({
  uri: '/api',
  request: (operation) => {
    operation.setContext({
      headers: headers()
    });
  }
});

export default client;