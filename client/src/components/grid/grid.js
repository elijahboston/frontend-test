import React from 'react';
import PropTypes from 'prop-types';
import CenterContent from '../center-content';

const Grid = ({ children, rows}) =>
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
        grid-template-rows: repeat(${rows}, 25rem);
        grid-gap: 1rem;
        grid-auto-flow: dense;
      }

      .load-more {
        display: flex;
        justify-content: center;
      }
    `}</style>
  </CenterContent>;

Grid.propTypes = {
  rows: PropTypes.number,
  children: PropTypes.any
}

Grid.defaultProps = {
  rows: 0,
  children: null
}

export default Grid;