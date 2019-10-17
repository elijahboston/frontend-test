import React from 'react';
import PropTypes from 'prop-types';
import { Header, Filter, Grid, GridItem, CenterContent } from '../components';
import { LoadMoreButton } from '../components/button';
import { useQuery } from '@apollo/react-hooks';
import { MAIN_QUERY } from '../graphql';

import { mockTitle, mockDescription } from '../storybook-helpers/_mock-data';

const filterOptions = [
  { title: 'All', alias: 'all' },
  { title: '$', alias: '$' },
  { title: '$$', alias: '$$' },
  { title: '$$$', alias: '$$$' },
  { title: '$$$$', alias: '$$$$' },
];

const MainView = () => {
  const { loading, error, data } = useQuery(MAIN_QUERY);
  
  if (loading) return (<div>Loading...</div>);

  if (error) return (<div>{error}</div>);

  return (
    <main>
      <Header title={mockTitle} description={mockDescription} />
      <Filter priceOptions={filterOptions} categoryOptions={data.categories.category} />
      <CenterContent>
        <h2>All Restaurants</h2>
      </CenterContent>
      <Grid rows={items.length > 0 ? 2 : 0}>
        {data.search.business.map(item => <GridItem key={item.id} { ...item } isOpen={item.is_open} />)}
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