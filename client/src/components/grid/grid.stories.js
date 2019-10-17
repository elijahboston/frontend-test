import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import { buildGrid } from '../../storybook-helpers/_helpers';
import Grid from './grid';

const stories = storiesOf('Grid', module);

stories.addDecorator(withKnobs);

const label = 'Items';
const defaultValue = 8;
const options = {
   range: true,
   min: 1,
   max: 8,
   step: 1,
};
const groupId = 'Grid';

stories.add('Default', () => {
  const n = number(label, defaultValue, options, groupId);
  return (
    <Grid rows={n/4} onLoadMore={() => {}} hasMoreResults={boolean('Has more results', true, groupId)}>
      {buildGrid(n)}
    </Grid>
  )
});