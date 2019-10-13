import React from 'react';
import CenterContent from '../center-content';
import FilterSection from './filter-section';

const Filter = () =>
  <CenterContent>
    <nav className='filter'>
      <div className='filter-options'>
        <span>Filter By:</span>
        <form id='filter-form'>
          <FilterSection>
            <label>Open Now</label>
            <input type='checkbox' name='open-now' />
          </FilterSection>
          <FilterSection>
            <select name='price'>
              <option>Price</option>
              <option>$</option>
              <option>$$</option>
            </select>
          </FilterSection>
          <FilterSection>
              <select name='categories'>
                <option>Categories</option>
                <option>Sushi</option>
                <option>Burgers</option>
              </select>
          </FilterSection>
        </form>
      </div>
      <div className='clear-filter'>
        <button type='button'>Clear All</button>
      </div>
      <style jsx>{`
        .filter {
          display: flex;
          width: 100%;
          justify-content: space-between;
        }

        .filter-options {
          width: 100%;
          display: flex;
        }

        .clear-filter button {
          width: 10rem;
        }

        #filter-form {
          display: flex;
        }
      `}</style>
    </nav>
  </CenterContent>;

export default Filter;