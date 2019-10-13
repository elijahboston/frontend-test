import React from 'react';
import PropTypes from 'prop-types';
import CenterContent from '../center-content';
import GridItem from './grid-item';

const Grid = ({ items }) =>
  <CenterContent>
    <div className='grid'>
        {items.map(item => <GridItem key={item.id} { ...item } isOpen={item.is_open} />)}
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
  items: PropTypes.arrayOf(PropTypes.object)
}

Grid.defaultProps = {
  items: []
}

export default Grid;