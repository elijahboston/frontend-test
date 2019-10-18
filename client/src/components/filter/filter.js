import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CenterContent from '../center-content';
import { Button } from '../button';
import OpenNowFilter from './open-now-filter';
import Select from './select';
import { AppContext } from '../../contexts';

// Filter handles the filtering options for the main page nav
const Filter = ({ priceOptions, categoryOptions }) => {
  const {
    openNow,
    pricesSelected,
    categoriesSelected,
    setPricesSelected,
    setCategoriesSelected,
    setOpenNow,
    toggleOpenNow,
    togglePriceSelect,
    toggleCategorySelect
  } = useContext(AppContext);

  // these are just used to control the open/close state
  // of the dropdown menus
  const [priceSelect, setPriceSelect] = useState(false);
  const [categorySelect, setCategorySelect] = useState(false);

  const clearAll = () => {
    setOpenNow(false);
    
    // close menus
    setPriceSelect(false);
    setCategorySelect(false);
    
    // clear selections
    setCategoriesSelected([]);
    setPricesSelected([]);
  }

  return (
    <CenterContent>
      <nav className='filter'>
        <div className='left'>
          <div className='filter-by'>Filter By:</div>
          <div className='filter-options'>
            <OpenNowFilter isChecked={openNow} onClick={() => toggleOpenNow()} />

            <Select label='Price'
              selectedOptions={pricesSelected}
              toggleOption={togglePriceSelect}
              options={priceOptions}
              isOpen={priceSelect}
              height={9}
              onClick={() => {
                // close category menu if open
                setCategorySelect(false);
                setPriceSelect(!priceSelect);
              }} />

            <Select label='Categories'
              minWidth={10}
              height={20}
              options={categoryOptions.map(category => {
                const { title } = category;
                // Replace non-characters to infer the alias
                // see /queries/categories-query.js for
                // why we can't get this from the query
                const alias = title
                  .replace(/( )|(-)|(\/)|(\+)|(\.)|(&)/g, '')
                  .toLowerCase();

                return { title, alias };
              })}
              selectedOptions={categoriesSelected}
              toggleOption={toggleCategorySelect}
              isOpen={categorySelect}
              onClick={() => {
                // close price menu if open
                setPriceSelect(false);
                setCategorySelect(!categorySelect)
              }} />
          </div>
        </div>
        <div className='right'>
          <Button className='clear-all' onClick={() => clearAll()}>Clear All</Button>
        </div>

        <style jsx>{`
          .filter {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            padding: 1.5rem 0;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            margin-bottom: 1rem;
          }

          .left {
            display: flex;
            align-items: center;
          }

          .filter-options {
            display: flex;
            justify-content: flex-start;
          }

          .clear-filter button {
            width: 10rem;
          }

          #filter-form {
            display: flex;
          }

          .open-now {
            border-bottom: 1px solid blue;
          }

          @media only screen and (max-width: 760px) {
              .filter {
                flex-direction: column;
                width: 100%;
              }

              .right {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 1rem 0 0 0;
              }
          }
        `}</style>
      </nav>
    </CenterContent>
  );
};

Filter.propTypes = {
  priceOptions: PropTypes.array,
  categoryOptions: PropTypes.array,
}

Filter.defaultProps = {
  priceOptions: [],
  categoryOptions: [],
}

export default Filter;