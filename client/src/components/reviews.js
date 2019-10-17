import React from 'react';
import PropTypes from 'prop-types';
import CenterContent from './center-content';
import ReviewItem from './review-item';

const Reviews = ({ reviewCount, items }) =>
  <section className='reviews'>
    <CenterContent>
      <div className='num-reviews'>{reviewCount} Reviews</div>
      <ul className='review-list'>
        {items.map(item => {
          // need to destructure this
          // to re-assign values with underscores
          const {
            id,
            text,
            rating,
            time_created: date,
            user: {
              name,
              image_url: picture
            }
          } = item;
          return (
            <ReviewItem key={id}
              name={name}
              text={text}
              date={date}
              rating={rating}
              picture={picture}/>
          );
        })}
      </ul>
    </CenterContent>
    <style jsx>{`
      .reviews {
        margin: 2rem 0;
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
  </section>;

Reviews.propTypes = {
  reviewCount: PropTypes.number,
  items: PropTypes.array
};

Reviews.defaultProps = {
  reviewCount: 0,
  items: []
};

export default Reviews;