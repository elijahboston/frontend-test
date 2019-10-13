import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ category, price, isClosed }) =>
  <div className='details'>
    <div className='left'>
      <span className='category'>
        {category}
      </span>
      <span className='price'>
        {price}
      </span>
    </div>
    <div className='right'>
      {isClosed ? 'Closed' : 'Open'}
    </div>
  </div>;

Details.propTypes = {
  category: PropTypes.string,
  price: PropTypes.string,
  isClosed: PropTypes.bool
}

Details.defaultProps = {
  category: '',
  price: '$',
  isClosed: false
}

export default Details;