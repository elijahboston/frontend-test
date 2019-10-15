import React from 'react';
import PropTypes from 'prop-types';
import OpenNow from './open-now';

const BusinessDetails = ({ category, price, isClosed }) =>
  <div className='details'>
    <div className='left'>
      <span className='category'>
        {category.title}
      </span>
      <span className='price'>
        {price}
      </span>
    </div>
    <div className='right'>
      <OpenNow isClosed={isClosed} />
    </div>
    <style jsx>{`
      .details {
        margin: 1rem 0;
        display: flex;
        justify-content: space-between;
        font-size: .8rem;
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
  category: PropTypes.object,
  price: PropTypes.string,
  isClosed: PropTypes.bool
}

BusinessDetails.defaultProps = {
  category: {
    title: ''
  },
  price: '$',
  isClosed: false
}

export default BusinessDetails;