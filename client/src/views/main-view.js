import React from 'react';
import PropTypes from 'prop-types';
import { Header, Filter, Grid, GridItem, CenterContent } from '../components';
import { mockTitle, mockDescription } from '../storybook-helpers/_mock-data';

const filterOptions = [
  { label: 'All', value: 'All' },
  { label: '$', value: '$' },
  { label: '$$', value: '$$' },
  { label: '$$$', value: '$$$' },
  { label: '$$$$', value: '$$$$' },
];

const categoryOptions = [
  { label: 'Sushi', value: 'Sushi' },
  { label: 'Burgers', value: 'Burgers' },
];

const MainView = ({ items }) =>
  <main>
    <Header title={mockTitle} description={mockDescription} />
    <Filter priceOptions={filterOptions} categoryOptions={categoryOptions} />
    <CenterContent>
      <h2>All Restaurants</h2>
    </CenterContent>
    <Grid>
      {items.map(item => <GridItem key={item.id} { ...item } isOpen={item.is_open} />)}
    </Grid>
  </main>;

MainView.propTypes = {
  items: PropTypes.array
};

MainView.defaultProps = {
  items: []
};

export default MainView;