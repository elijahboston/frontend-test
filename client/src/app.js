import React, { useState } from 'react';
import { Router } from '@reach/router';
import { MainView, DetailView } from './views';
import { ThemeProvider, AppProvider } from './contexts';

const theme = {
  primary: '#002B56',
  buttonText: '#fff',
  open: '#00E8A4',
  closed: '#FF3548',
  fontLight: '#757575',
  borderLight: '#C8C8C8'
};

const App = () => {
  const [openNow, setOpenNow] = useState(false);
  const [pricesSelected, setPricesSelected] = useState([]);
  const [categoriesSelected, setCategoriesSelected] = useState([]);

  const toggleSelected = (value, values, stateSetter) => {
      // add or remove this price from our list of filtered prices
      if (!values.includes(value)) {
        console.log('adding', value);
        stateSetter([...values, value]);
      } else {
        console.log('removing', value);
        stateSetter([...values.filter(val => val !== value)]);
      }
  }

  const context = {
    openNow,
    pricesSelected,
    categoriesSelected,
    setCategoriesSelected,
    setPricesSelected,
    toggleOpenNow: () => setOpenNow(!openNow),
    togglePriceSelect: (price) => toggleSelected(price, pricesSelected, setPricesSelected),
    toggleCategorySelect: (category) => toggleSelected(category, categoriesSelected, setCategoriesSelected)
  }

  return (
    <div className='app'>
      <AppProvider value={context}>
        <ThemeProvider value={theme}>
          <Router>
            <DetailView path="/:slug" />
            <MainView path="/" />
          </Router>
        </ThemeProvider>
      </AppProvider>
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