import React from 'react';
import PropTypes from 'prop-types';
import Rating from './rating';

const ReviewItem = ({ name, date, body, picture, rating }) =>
  <li className='review'>
    <div className='user-profile'>
      <img src={picture} className='profile-picture'/>
      <div className='user'>
        <div className='name'>{name}</div>
        <div className='review-date'>{date}</div>
      </div>
    </div>
    <div className='review-content'>
      <Rating score={rating} />
      {body}
    </div>
    <style jsx>{`
      .review {
        display: flex;
        justify-content: space-between;
        padding: 2rem 0;
        width: 100%;
        border-bottom: 1px solid #ccc;
      }

      .user-profile {
        min-width: 20rem;
        display: flex;
      }

      .user .name {
        font-weight: bold;
      }

      .user .review-date {
        color: #ccc;
        font-size: .8rem;
      }

      .profile-picture {
        width: 64px;
        height: 64px;
        margin-right: 2rem;
      }
    `}</style>
  </li>;

ReviewItem.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  body: PropTypes.string,
  picture: PropTypes.array,
  rating: PropTypes.number
};

ReviewItem.defaultProps = {
  name: 'Jane Doe',
  date: '10/2/19',
  body: 'This product was excellent',
  picture: ['http://placehold.it/300/250'],
  rating: 3.5
};

export default ReviewItem;