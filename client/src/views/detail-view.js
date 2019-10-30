import React from 'react';
import PropTypes from 'prop-types';
import { Loading, APIError } from '../components';
import { useQuery } from '@apollo/react-hooks';
import {
  BusinessDetails,
  DetailHero,
  Rating,
  CenterContent,
  Reviews
} from '../components';
import { DETAIL_QUERY } from '../queries';

const DetailView = ({ id }) => {
  const { error, loading, data } = useQuery(
    DETAIL_QUERY,
    { variables: { id } }
  );
  
  if (loading) return (<Loading />);

  if (error) return (<APIError error={error} />);

  const {
    name,
    photos,
    price,
    rating,
    categories,
    is_closed: isClosed,
    reviews,
    review_count: reviewCount,
    location: {
      formatted_address: formattedAddress
    }
  } = data.business;

  const category = categories[0]['title'];

  const details = { category, price, isOpen: !isClosed };

  return (
    <main>
      <CenterContent>
        <h1>{name}</h1>
        <Rating score={rating} />
        <div className='business-details'>
          <BusinessDetails {...details} />
        </div>
      </CenterContent>
      <DetailHero name={name} photos={photos} address={formattedAddress} />
      <Reviews items={reviews} reviewCount={reviewCount} />
      <style jsx>{`
        // Set the parent font size in px so that
        // the <BusinessDetails /> component's size
        // scales up
        
        .business-details {
          font-size: 25px;
        }
      `}</style>
    </main>
  )
}

DetailView.propTypes = {
  id: PropTypes.string
}

DetailView.defaultProps = {
  id: ''
}

export default DetailView;