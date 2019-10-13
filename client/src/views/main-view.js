import React from 'react';
import { Header, Filter, CenterContent, Grid } from '../components';

const title = 'Resturaunts';
const description = `Lorem ipsum dolor sit amet, consectetur adipiscing \
                    elit, sed do eiusmod tempor incididunt ut labore et \
                    dolore magna aliqua.`;

const MainView = () =>
  <main>
    <Header title={title} description={description} />
    <Filter />
    <Grid />
  </main>;

export default MainView;