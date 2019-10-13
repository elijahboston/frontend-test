import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const Photo = ({ name, url }) =>
  <div className='photo'>
    <img src={url} alt={name} />
    <style jsx>{`
      .photo img {
        max-width: 100%;
        height: auto;
      }
    `}</style>
  </div>;

Photo.propTypes = {
  url: PropTypes.string
}

Photo.defaultProps = {
  url: ''
}

// Display 5 star image rating based on numerical score
const Rating = ({ rating }) => 
  <div className='rating'>
    {rating}
  </div>;

Rating.propTypes = {
  rating: PropTypes.number
}

Rating.defaultProps = {
  rating: 5
}

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

const GridItem = ({ name, alias, photos, rating, price, isClosed, categories }) =>
  <div className='item'>
    <Photo name={name} url={photos[0]} />
    <span className='name'>{name}</span>
    <Rating value={rating} />
    <Details price={price} isClosed={isClosed} category={categories[0]} />
    <div className='learn-more'>
      <Link to={`/details/${alias}`}>Learn More</Link>
    </div>
    <style jsx>{`
      .item {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 19rem;
      }
    `}</style>
  </div>;

GridItem.propTypes = {
  name: PropTypes.string,
  alias: PropTypes.string,
  photos: PropTypes.array,
  rating: PropTypes.number,
  price: PropTypes.string,
  isClosed: PropTypes.bool,
  categories: PropTypes.array
};

GridItem.defaultProps = {
  name: 'Resturant',
  alias: '',
  photos: [],
  rating: 5,
  price: '$',
  isClosed: false,
  categories: []
};

export default GridItem;