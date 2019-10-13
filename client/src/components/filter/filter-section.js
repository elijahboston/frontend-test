import React from 'react';
import PropTypes from 'prop-types';

const FilterSection = ({ children }) =>
  <div className='filter-section'>
    {children}
    <style jsx>{`
      .filter-section {
        display: flex;
      }
    `}</style>
  </div>;

FilterSection.propTypes = {
  children: PropTypes.any
};

FilterSection.defaultProps = {
  children: null
}

export default FilterSection;