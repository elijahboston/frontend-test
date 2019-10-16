import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Select from './select';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);

const filterOptions = [
  { label: 'All', value: 'All' },
  { label: '$', value: '$' },
  { label: '$$', value: '$$' },
  { label: '$$$', value: '$$$' },
  { label: '$$$$', value: '$$$$' },
];

stories.add('Default', () => (
  <Select label={text('Label', 'Select')} options={filterOptions} isOpen={boolean('isOpen', false)} />
));