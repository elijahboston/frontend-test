import React from 'react';
import { filterOptions } from '../../storybook-helpers/_mock-data';
import { AppProvider } from '../../contexts';
import Filter from './filter';

export default { title: 'Filter' };

const categoryOptions = [
  { title: 'Sushi', alias: 'Sushi' },
  { title: 'Burgers', alias: 'Burgers' },
  { title: 'Japanese', alias: 'Japanese' },
  { title: 'New American', alias: 'New American' },
  { title: 'Gastropub', alias: 'Gastropub' },
];

export const withContent = () =>
  <AppProvider>
    <Filter priceOptions={filterOptions} categoryOptions={categoryOptions} />
  </AppProvider>;