import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
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
const groupId = 'SCORE-ID1';

stories.add('Default', () => (
  <Grid>
    {buildGrid(number(label, defaultValue, options, groupId))}
  </Grid>
));