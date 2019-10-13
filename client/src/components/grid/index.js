import React from 'react';
import PropTypes from 'prop-types';
import CenterContent from '../center-content';

const Grid = ({ children }) =>
  <CenterContent>
    <div className='grid'>
        <ul>{children}</ul>
    </div>
    <style jsx>{`
      .grid > ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
        grid-template-rows: repeat(2, 25rem);
        grid-gap: 1rem;
        grid-auto-flow: dense;
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