import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Header, Filter, Grid, GridItem, CenterContent } from '../components';
import { LoadMoreButton } from '../components/button';
import { useQuery } from '@apollo/react-hooks';
import { MAIN_QUERY } from '../graphql';
import { AppContext } from '../contexts';

import { mockTitle, mockDescription } from '../storybook-helpers/_mock-data';

// Hardcode these since they don't change
const filterOptions = [
  { title: 'All', alias: 0 },
  { title: '$', alias: 1 },
  { title: '$$', alias: 2 },
  { title: '$$$', alias: 3 },
  { title: '$$$$', alias: 4 },
];

const MainView = () => {
  const {
    openNow,
    pricesSelected,
    categoriesSelected
  } = useContext(AppContext);

  const queryParams = {
    categories: categoriesSelected.join(','),
    price: pricesSelected.join(','),
    openNow: openNow
  };

  const { loading, error, data } = useQuery(
    MAIN_QUERY,
    { variables: { ...queryParams } }
  );
  
  if (loading) return (<div>Loading...</div>);

  if (error) return (<div>{error}</div>);

  const {
    categories: {
      category: categoryOptions
    },
    search: {
      business: items
    }
  } = data;

  return (
    <main>
      <Header title={mockTitle} description={mockDescription} />
      <Filter priceOptions={filterOptions} categoryOptions={categoryOptions} />
      <CenterContent>
        <h2>All Restaurants</h2>
      </CenterContent>
      <Grid rows={items.length > 0 ? 2 : 0}>
        {items.map(item => {
          const category = item.categories[0].title;
          return (<GridItem key={item.id} { ...item } category={category} isOpen={!item.is_closed} />);
        })}
      </Grid>
      <div className='load-more'>
        <LoadMoreButton>Load More</LoadMoreButton>
      </div>
      <style jsx>{`
        .load-more {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </main>
  );
}

export default MainView;