import gql from 'graphql-tag';

const MAIN_QUERY = gql`{
  search(location:"san francisco" limit:8) {
    business {
      id
      alias
      name
      price
      categories {
        title
        alias
      }
      is_closed
      photos
    }
  }
  categories {
      category {
        title
        alias
      }
  }
}`;

export default MAIN_QUERY;
