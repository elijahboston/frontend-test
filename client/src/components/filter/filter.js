import React, { useContext, useState } from 'react';
import CenterContent from '../center-content';
import Button from '../button';
import OpenNowFilter from './open-now-filter';
import Select from './select';

// Filter handles the filtering options for the main page nav
const Filter = ({ priceOptions, categoryOptions }) => {
  const [openNow, setOpenNow] = useState(false);
  const [priceSelect, setPriceSelect] = useState(false);
  const [categorySelect, setCategorySelect] = useState(false);

  const toggleSelect = (evt) => {
    console.log(evt.target);
  }

  return (
    <CenterContent>
      <nav className='filter'>
        <div className='left'>
          <div className='filter-by'>Filter By:</div>
          <div className='filter-options'>
            <OpenNowFilter checked={openNow} onClick={() => setOpenNow(!openNow)} />

            <Select label='Price'
              options={priceOptions}
              isOpen={priceSelect}
              onClick={() => {
                // close category menu if open
                setCategorySelect(false);
                setPriceSelect(!priceSelect);
              }} />

            <Select label='Categories'
              minWidth={10}
              options={categoryOptions}
              isOpen={categorySelect}
              onClick={() => {
                // close price menu if open
                setPriceSelect(false);
                setCategorySelect(!categorySelect)
              }} />
          </div>
        </div>
        <div className='right'>
          <Button className='clear-all'>Clear All</Button>
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
        `}</style>
      </nav>
    </CenterContent>
  );
};

export default Filter;