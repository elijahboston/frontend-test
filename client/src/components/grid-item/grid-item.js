import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../rating';
import BusinessDetails from '../business-details';
import Photo from './photo';
import LearnMore from './learn-more';

const GridItem = ({ id, name, alias, photos, rating, price, isClosed, category }) =>
  <li className='item'>
    <Photo name={name} url={photos[0]} />
    
    <h4 className='name'>{name}</h4>
    
    <Rating score={rating} />
    <BusinessDetails price={price} isClosed={isClosed} category={category} />
    <LearnMore to={`${alias}/${id}`} />

    <style jsx>{`
      .name {
        font-weight: bold;
        margin: .5rem 0;
      }
    `}</style>
  </li>;

GridItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  alias: PropTypes.string,
  photos: PropTypes.array,
  rating: PropTypes.number,
  price: PropTypes.string,
  isClosed: PropTypes.bool,
  category: PropTypes.string
};

GridItem.defaultProps = {
  id: '',
  name: '',
  alias: '',
  photos: [],
  rating: 5,
  price: '$',
  isClosed: false,
  category: ''
};

export default GridItem;