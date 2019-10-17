import gql from 'graphql-tag';

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      category {
        title
        parent_categories {
          title
          alias
        }
      }
    }
  }
`;

export default CATEGORIES_QUERY;
