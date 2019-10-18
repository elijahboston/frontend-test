import React from 'react';
import PropTypes from 'prop-types';
import Rating from './rating';

const parseDate = (date) => {
  const parsed = new Date(date);
  const day = parsed.getDate();
  const month = parsed.getMonth() + 1;
  const year = parsed.getFullYear();

  return `${day}/${month}/${year}`;
}

const ReviewItem = ({ name, date, text, picture, rating }) =>
  <li className='review'>
    <div className='user-profile'>
      <div className='profile-picture'></div>
      <div className='user'>
        <div className='name'>{name}</div>
        <div className='review-date'>{parseDate(date)}</div>
      </div>
    </div>
    <div className='review-content'>
      <Rating score={rating} />
      {text}
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
        min-width: 16rem;
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
        background: url(${picture});
        background-size: cover;
      }
    `}</style>
  </li>;

ReviewItem.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  picture: PropTypes.string,
  rating: PropTypes.number
};

ReviewItem.defaultProps = {
  name: 'Jane Doe',
  date: '10/2/19',
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum orci nec nisi efficitur faucibus. \
  Quisque sit amet arcu ac erat pharetra tempus at id augue. Aliquam erat volutpat. Nullam dignissim nec quam \
  suscipit consequat. Curabitur a urna sit amet dolor cursus semper. Vivamus vitae massa nulla. Fusce ut dolor dolor. \
  Quisque eget auctor augue. In condimentum mauris eu consequat tempor. Suspendisse vel commodo nulla, eu venenatis nibh. \
  Sed tincidunt nisl imperdiet mauris pretium, vel lacinia tortor eleifend. Ut porttitor augue laoreet, maximus nulla nec, \
  fringilla arcu. Nunc vitae tincidunt sem.`,
  picture: 'http://placehold.it/300/250',
  rating: 3.5
};

export default ReviewItem;