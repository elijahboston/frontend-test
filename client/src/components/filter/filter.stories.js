import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Filter from './filter';

const stories = storiesOf('Filter', module);

stories.addDecorator(withKnobs);

const filterOptions = [
  { label: 'All', value: 'All' },
  { label: '$', value: '$' },
  { label: '$$', value: '$$' },
  { label: '$$$', value: '$$$' },
];

const categoryOptions = [
  { label: 'Sushi', value: 'Sushi' },
  { label: 'Burgers', value: 'Burgers' },
];

stories.add('Default', () => (
  <Filter priceOptions={filterOptions} categoryOptions={categoryOptions} />
));