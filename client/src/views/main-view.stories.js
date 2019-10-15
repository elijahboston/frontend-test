import React from 'react';
import { storiesOf } from '@storybook/react';
import MainView from './main-view';
import { mockGridItems } from '../storybook-helpers/_helpers';

const stories = storiesOf('Main View', module);

stories.add('Default', () => (
  <MainView items={mockGridItems(4)} />
));