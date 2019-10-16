import React, { useState } from 'react';
import { Router } from '@reach/router';
import { MainView, DetailView } from './views';
import { ThemeProvider, AppProvider } from './contexts';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const theme = {
  primary: '#002B56',
  buttonText: '#fff',
  open: '#00E8A4',
  closed: '#FF3548',
  fontLight: '#757575',
  borderLight: '#C8C8C8'
};

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

const App = () => {
  const [openNow, setOpenNow] = useState(false);
  const [pricesSelected, setPricesSelected] = useState([]);
  const [categoriesSelected, setCategoriesSelected] = useState([]);

  // handle toggling multiple values
  // by adding/removing them from an array in local state
  const toggleSelected = (value, values, stateSetter) => {
      if (!values.includes(value)) {
        stateSetter([...values, value]);
      } else {
        stateSetter([...values.filter(val => val !== value)]);
      }
  };

  // setup app context
  // this is mostly used by the filter component
  const context = {
    openNow,
    pricesSelected,
    categoriesSelected,
    setCategoriesSelected,
    setPricesSelected,
    toggleOpenNow: () =>
      setOpenNow(!openNow),
    togglePriceSelect: (price) =>
      toggleSelected(price, pricesSelected, setPricesSelected),
    toggleCategorySelect: (category) =>
      toggleSelected(category, categoriesSelected, setCategoriesSelected)
  };

  return (
    <div className='app'>
      <ApolloProvider client={client}>
        <AppProvider value={context}>
          <ThemeProvider value={theme}>
            <Router>
              <DetailView path="/:slug/:id" />
              <MainView path="/" />
            </Router>
          </ThemeProvider>
        </AppProvider>
      </ApolloProvider>
      <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
          font-family: 'Helvetica Neue', san-serif;
        }
        
        h1, h2 {
          font-weight: lighter;
        }
      `}</style>
    </div>
  );
}

    
export default App;