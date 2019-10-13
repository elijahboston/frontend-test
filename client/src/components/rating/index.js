import React from 'react';
import PropTypes from 'prop-types';

// Display 5 star image rating based on numerical score
const Rating = ({ score }) => {

  return (
    <div className='rating'>
      {score}
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