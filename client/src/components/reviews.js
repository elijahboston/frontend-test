import React from 'react';
import PropTypes from 'prop-types';
import CenterContent from './center-content';
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
  items: PropTypes.any
};

ReviewItem.defaultProps = {
  items: []
};

const Reviews = ({ items }) => {
  const mappedItems = items.map(item => {
    return {
      body: item.text,
      date: item.time_created,
      rating: item.rating,
      name: item.user.name,
      picture: item.user.image_url
    }
  });

  return (
    <section className='reviews'>
      <CenterContent>
        <div className='num-reviews'>321 Reviews</div>
        <ul className='review-list'>
          {mappedItems.map(props => <ReviewItem {...props} />)}
        </ul>
      </CenterContent>
      <style jsx>{`
        .reviews {
          margin-top: 2rem;
        }

        .num-reviews {
          font-size: 1.2rem;
          margin: 1rem 0;
        }

        ul.review-list {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      `}</style>
    </section>
  );
};

Reviews.propTypes = {
  items: PropTypes.any
};

Reviews.defaultProps = {
  items: []
};

export default Reviews;