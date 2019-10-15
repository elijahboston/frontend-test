import React from 'react';
import { storiesOf } from '@storybook/react';
import DetailView from './detail-view';

const stories = storiesOf('Detail View', module);

stories.add('Default', () => (
  <DetailView slug='test-slug' />
));