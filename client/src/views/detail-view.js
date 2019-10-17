import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import {
  BusinessDetails,
  DetailHero,
  Rating,
  CenterContent,
  Reviews
} from '../components';

const DETAIL_QUERY = gql`
  query getDetails($id: String) {
    business(id: $id) {
      name
      photos
      price
      rating
      categories {
        title
        alias
      }
      is_closed
      location {
        formatted_address
      }
      review_count
      reviews {
        id
        rating
        text
        time_created
        user {
          name
          image_url
        }
      }
    }
  }
`;

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