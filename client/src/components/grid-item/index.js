import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import Rating from '../rating';
import Photo from './photo';
import Details from './details';

const GridItem = ({ name, alias, photos, rating, price, isClosed, categories }) =>
  <div className='item'>
    <Photo name={name} url={photos[0]} />
    <span className='name'>{name}</span>
    <Rating score={rating} />
    <Details price={price} isClosed={isClosed} category={categories[0]} />
    <div className='learn-more'>
      <Link to={`/${alias}`}>Learn More</Link>
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