import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { filterOptions } from '../../storybook-helpers/_mock-data';
import Select from './select';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Select
    label={text('Label', 'Select')}
    options={filterOptions}
    isOpen={boolean('isOpen', false)} />
));

stories.add('Expanded', () => (
  <Select label={'Select'} options={filterOptions} isOpen={true} />
));

stories.add('Options Selected', () => (
  <Select
    label={'Select'}
    options={filterOptions}
    selectedOptions={[1, 2]}
    isOpen={true} />
));