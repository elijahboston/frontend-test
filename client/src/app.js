import React, { useState } from 'react';
import { Router } from '@reach/router';
import { MainView, DetailView } from './views';
import { ThemeProvider, AppProvider } from './contexts';
import apolloClient from './helpers/apollo-client';
import { ApolloProvider } from 'react-apollo';

const theme = {
  primary: '#002B56',
  buttonText: '#fff',
  open: '#00E8A4',
  closed: '#FF3548',
  fontLight: '#757575',
  borderLight: '#C8C8C8'
};

const client = new apolloClient();

const App = () => {
  const [openNow, setOpenNow] = useState(false);
  const [pricesSelected, setPricesSelected] = useState([]);
  const [categoriesSelected, setCategoriesSelected] = useState([]);

  // handle toggling multiple values
  // by adding/removing them from an array in local state
  const toggleSelected = (value, values, stateSetter) =>
    values.includes(value) ?
    // remove value
    stateSetter([...values.filter(val => val !== value)]) :
    // add value
    stateSetter([...values, value]);
  

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