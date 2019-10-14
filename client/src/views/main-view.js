import React from 'react';
import PropTypes from 'prop-types';
import { Header, Filter, Grid, GridItem } from '../components';
import { mockTitle, mockDescription } from '../test-helpers/_mock-data';

const MainView = ({ items }) =>
  <main>
    <Header title={mockTitle} description={mockDescription} />
    <Filter />
    
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