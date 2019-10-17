import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Loading, Grid, GridItem, LoadMoreButton, APIError } from '../components';
import { useQuery } from '@apollo/react-hooks';
import { SEARCH_QUERY } from '../queries';

// GridView handles fetching and updating search results
const GridView = ({ categories, price, isOpen }) => {
  const queryParams = {
    categories: categories.join(','),
    price: price.join(','),
    openNow: isOpen
  };
  const [hasMoreResults, setHasMoreResults] = useState(true);
  const { loading, error, data, fetchMore } = useQuery(
    SEARCH_QUERY,
    {
      variables: {
        offset: 0,
        limit: 8,
        ...queryParams
      },
      fetchPolicy: 'cache-and-network'
    },
  );

  if (error) return (<APIError error={error} />);

  const initData = {
    search: {
      business: []
    }
  };

  // Initialize with an empty data set
  // so we can load more content without
  // re-rendering the entire grid
  const {
    search: {
      business: items
    }
  } = !data ? initData : data;

  const onLoadMore = () =>
    fetchMore({
      variables: {
        offset: items.length
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        // update state by merging search results
        if (!fetchMoreResult) {
          setHasMoreResults(false);
          return prev;
        }
        return Object.assign({}, prev, {
          search: {
            __typename: 'Businesses',
            business: [...prev.search.business, ...fetchMoreResult.search.business]
          }
        });
      }
    });

  return (
    <div className='grid-view'>
      <Grid rows={items.length > 0 ? (items.length / 4) : 0}>
        {items.map(item => {
          const category = item.categories[0].title;
          return (<GridItem key={item.id} { ...item } category={category} isOpen={!item.is_closed} />);
        })}
      </Grid>

      {loading && <Loading />}

      <div className='load-more'>
        {hasMoreResults && <LoadMoreButton onClick={onLoadMore}>Load More</LoadMoreButton>}
      </div>
      <style jsx>{`
        .load-more {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

GridView.propTypes = {
  categories: PropTypes.array,
  price: PropTypes.array,
  isOpen: PropTypes.bool
}

GridView.defaultProps = {
  categories: [],
  price: [],
  isOpen: false
}

export default GridView;