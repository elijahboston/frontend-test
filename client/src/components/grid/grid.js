import React from 'react';
import PropTypes from 'prop-types';
import CenterContent from '../center-content';
import { LoadMoreButton } from '../button';

const Grid = ({ children, rows, onLoadMore, hasMoreResults }) =>
  <CenterContent>
    <div className='grid'>
        <ul>{children}</ul>
    </div>
    <div className='load-more'>
      {hasMoreResults && <LoadMoreButton onClick={onLoadMore}>Load More</LoadMoreButton>}
    </div>
    <style jsx>{`
      .grid > ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
        grid-template-rows: repeat(${rows}, 20rem);
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
  children: PropTypes.any,
  onLoadMore: PropTypes.func,
  hasMoreResults: PropTypes.bool
}

Grid.defaultProps = {
  rows: 0,
  children: null,
  onLoadMore: () => {},
  hasMoreResults: true
}

export default Grid;