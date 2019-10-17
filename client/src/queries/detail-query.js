import gql from 'graphql-tag';

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

export default DETAIL_QUERY;
