import React from 'react';
import PropTypes from 'prop-types';
import FullStar from '../svg/full-star.svg';
import HalfStar from '../svg/half-star.svg';
import EmptyStar from '../svg/empty-star.svg';

// Helper component to return multiple instances of a component
const RepeatComponent = ({ component, n }) => {
  const components = [];
  for (let i = 0; i < n; i++) {
    components.push(component);
  }

  // The math statement below lets us
  // generate a hash for our key names
  return (
    <React.Fragment>
      {components.map(Component => <Component key={Math.random().toString(36)}/>)}
    </React.Fragment>
  )
}

RepeatComponent.propTypes = {
  component: PropTypes.any,
  n: PropTypes.number
}

RepeatComponent.defaultProps = {
  component: null,
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
      <RepeatComponent component={FullStar} n={fullStarCount} />
      <RepeatComponent component={HalfStar} n={halfStarCount} />
      <RepeatComponent component={EmptyStar} n={emptyStarCount} />
      <style jsx>{`
        .rating {
          font-family: 'icons';
        }
      `}</style>
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