import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { DETAIL_QUERY } from '../graphql';

import {
  BusinessDetails,
  DetailHero,
  Rating,
  CenterContent,
  Reviews
} from '../components';


const DetailView = ({ id }) => {
  const { loading, error, data } = useQuery(DETAIL_QUERY, {
    variables: { id }
  });
  
  if (loading) return (<div>Loading...</div>);

  if (error) return (<div>{error}</div>);

  const {
    name,
    photos,
    price,
    rating,
    categories,
    is_closed: isClosed,
    reviews,
    location: {
      formatted_address: formattedAddress
    }
  } = data.business;

  const category = categories[0]['title'];

  const details = { category, price, isClosed };

  return (
    <main>
      <CenterContent>
        <h1>{name}</h1>
        <Rating score={rating} />
        <BusinessDetails {...details} />
      </CenterContent>
      <DetailHero name={name} photos={photos} address={formattedAddress} />
      <Reviews items={reviews} />
    </main>
  );
}

DetailView.propTypes = {
  id: PropTypes.string,
}

DetailView.defaultProps = {
  id: ''
}

export default DetailView;