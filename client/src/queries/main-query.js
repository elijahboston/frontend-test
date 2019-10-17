import gql from 'graphql-tag';

const MAIN_QUERY = gql`
  query MainView($price: String $categories: String $openNow: Boolean) {
    search(location:"las vegas" limit:8 price:$price categories:$categories open_now:$openNow) {
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
  }
`;

export default MAIN_QUERY;
