import React from 'react';
import PropTypes from 'prop-types';

// Helper component to return multiple instances of a component
const RepeatComponent = ({ children, n }) => {
  const components = [];
  for (let i = 0; i < n; i++) {
    components.push(children);
  }

  // The math statement below lets us
  // generate a hash for our key names
  return (
    <React.Fragment>
      {[...Array(n)].map(() => children)}
    </React.Fragment>
  )
}

RepeatComponent.propTypes = {
  children: PropTypes.any,
  n: PropTypes.number
}

RepeatComponent.defaultProps = {
  children: null,
  n: 0
}

// Display 5 star image rating based on numerical score
const Rating = ({ score }) => {
  // Ignore decimal places for full star count
  let fullStarCount = Math.floor(score);
  
  // If we have a remainder after dividing by 1
  // then we need a half-star
  let halfStarCount = score % 1 ? 1 : 0;

  let emptyStarCount = 5 - fullStarCount - halfStarCount;

  return (
    <div className='rating'>
      <RepeatComponent n={fullStarCount}>
        <i className='icon icon-full-star'></i>
      </RepeatComponent>
      <RepeatComponent n={halfStarCount}>
        <i className='icon icon-half-star'></i>
      </RepeatComponent>
      <RepeatComponent n={emptyStarCount}>
        <i className='icon icon-empty-star'></i>
      </RepeatComponent>
    </div>
  );
}

Rating.propTypes = {
  score: PropTypes.number
}

Rating.defaultProps = {
  score: 5
}

export default Rating;