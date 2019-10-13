import React from 'react';
import { Header, Filter, Grid, GridItem } from '../components';
import { mockTitle, mockDescription, gridItemData } from '../test-helpers/_mock-data';

const items = [
  { id: 0, ...gridItemData },
  { id: 1, ...gridItemData },
  { id: 2, ...gridItemData },
  { id: 3, ...gridItemData }
];

const MainView = () =>
  <main>
    <Header title={mockTitle} description={mockDescription} />
    <Filter />
    
    <Grid>
      {items.map(item => <GridItem key={item.id} { ...item } isOpen={item.is_open} />)}
    </Grid>
  </main>;

export default MainView;