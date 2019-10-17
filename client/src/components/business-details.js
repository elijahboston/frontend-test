import React from 'react';
import PropTypes from 'prop-types';
import OpenNow from './open-now';

// BusinessDetails displays basic category/price/open info

// NOTE: the font size is set in 'em' not 'rem' here,
// this is so we can resize the component's size externally
// by changing the font size of the parent container
const BusinessDetails = ({ category, price, isOpen }) =>
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
      <OpenNow isOpen={isOpen} />
    </div>
    <style jsx>{`
      .details {
        margin: 1rem 0;
        display: flex;
        justify-content: space-between;
        font-size: .5em;
        text-transform: uppercase;
        color: #757575;
      }

      .price:before {
        content: '•';
        margin: 0 .5rem;
      }
    `}</style>
  </div>;

BusinessDetails.propTypes = {
  category: PropTypes.string,
  price: PropTypes.string,
  isOpen: PropTypes.bool
}

BusinessDetails.defaultProps = {
  category: '',
  price: '$',
  isOpen: false
}

export default BusinessDetails;