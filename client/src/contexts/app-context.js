import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
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
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.any
};

AppProvider.defaultProps = {
  children: null
};

export const AppConsumer = AppContext.Consumer;

export default AppContext;