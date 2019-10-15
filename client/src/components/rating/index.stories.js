import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import Rating from '.';

const stories = storiesOf('Rating', module);

stories.addDecorator(withKnobs);

const label = 'Score';
const defaultValue = 3;
const options = {
   range: true,
   min: 0,
   max: 5,
   step: .5,
};
const groupId = 'SCORE-ID1';

stories.add('Default', () => (
  <Rating score={number(label, defaultValue, options, groupId)} />
));