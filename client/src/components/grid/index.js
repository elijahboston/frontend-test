import React from 'react';
import PropTypes from 'prop-types';
import CenterContent from '../center-content';

const Grid = ({ children }) =>
  <CenterContent>
    <div className='grid'>
        {children}
    </div>
    <style jsx>{`
      .grid {
        display: grid;
        grid-template-columns: repeat(4, auto [col-start]);
        grid-template-rows: 22rem;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
      }
    `}</style>
  </CenterContent>;

Grid.propTypes = {
  children: PropTypes.any
}

Grid.defaultProps = {
  children: null
}

export default Grid;