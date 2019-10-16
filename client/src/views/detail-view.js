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

const details = {
  name: 'test',
  rating: 2.5,
  category: { title: 'Japanese' },
  price: '$$'
}

const items = [
  {
    "text": "One of my best Mexican food experiences in the US. The place is quite small and very unassuming. Everyone just steps inside, wait in a fast moving line...",
    "rating": 5,
    "time_created": "2019-09-20 17:15:25",
    "url": "https://www.yelp.com/biz/el-farolito-san-francisco-2?adjust_creative=TqDUuPY1pjPF0uC9aiCj1g&hrid=WsXcx3QV8j2zPgVsq2o6kw&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=TqDUuPY1pjPF0uC9aiCj1g",
    "user": {
      "name": "Julia L.",
      "image_url": "https://s3-media1.fl.yelpcdn.com/photo/dpufHIu4F67cfOLMfkD-8w/o.jpg"
    }
  },
  {
    "text": "We came for some drunk food around 11:30pm on Friday night - the line wasn't very long and it moved quickly. As other reviews have mentioned, they're cash...",
    "rating": 4,
    "time_created": "2019-10-07 08:53:38",
    "url": "https://www.yelp.com/biz/el-farolito-san-francisco-2?adjust_creative=TqDUuPY1pjPF0uC9aiCj1g&hrid=pR8mb1nSZnduy_Zt3n6RWg&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=TqDUuPY1pjPF0uC9aiCj1g",
    "user": {
      "name": "Cathy L.",
      "image_url": "https://s3-media3.fl.yelpcdn.com/photo/qlk1GRptDJRVh20HbCNvtg/o.jpg"
    }
  }
];

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
      <DetailHero address={formattedAddress} />
      <Reviews items={items} />
    </main>
  );
}

DetailView.propTypes = {
  slug: PropTypes.string
}

DetailView.defaultProps = {
  slug: ''
}

export default DetailView;