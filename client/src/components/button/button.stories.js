import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './button';

const stories = storiesOf('Button', module);

stories.add('Default', () => (
  <Button>Clear All</Button>
));