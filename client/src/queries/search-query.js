import gql from 'graphql-tag';

const SEARCH_QUERY = gql`
  query Search($offset: Int $limit: Int $price: String $categories: String $openNow: Boolean) {
    search(location:"las vegas" offset:$offset limit:$limit price:$price categories:$categories open_now:$openNow) {
      business {
        id
        alias
        name
        price
        rating
        categories {
          title
          alias
        }
        is_closed
        photos
      }
    }
  }
`;

export default SEARCH_QUERY;
