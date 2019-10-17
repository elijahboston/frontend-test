import React, { useContext } from 'react';
import { filterOptions } from '../../storybook-helpers/_mock-data';
import { AppProvider } from '../../contexts';
import Filter from './filter';

export default { title: 'Filter' };

const categoryOptions = [
  { title: 'Sushi', alias: 'Sushi' },
  { title: 'Burgers', alias: 'Burgers' },
];

export const withContent = () =>
  <AppProvider>
    <Filter priceOptions={filterOptions} categoryOptions={categoryOptions} />
  </AppProvider>;