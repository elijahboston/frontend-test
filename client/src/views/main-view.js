import React from 'react';
import { Header, Filter, Grid } from '../components';
import { mockTitle, mockDescription, gridItemData } from '../test-helpers/_mock-data';

const MainView = () =>
  <main>
    <Header title={mockTitle} description={mockDescription} />
    <Filter />
    <Grid items={[
        { id: 0, ... gridItemData},
        { id: 1, ... gridItemData},
        { id: 2, ... gridItemData},
        { id: 3, ... gridItemData}
      ]} />
  </main>;

export default MainView;