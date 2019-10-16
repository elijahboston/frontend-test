import React from 'react';
import { storiesOf } from '@storybook/react';
import MainView from './main-view';
import { withKnobs, number } from '@storybook/addon-knobs';
import { mockGridItems } from '../storybook-helpers/_helpers';

const stories = storiesOf('Main View', module);

stories.addDecorator(withKnobs);

const label = 'Number of item';
const defaultValue = 4;
const options = {
   range: true,
   min: 4,
   max: 8,
   step: 1,
};
const groupId = 'MAIN-ID1';


stories.add('Default', () => {
  const n = number(label, defaultValue, options, groupId);
  return (
    <MainView items={mockGridItems(n)} />
  )
});