import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import OpenNow from './open-now';

const stories = storiesOf('Open Now', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <OpenNow isOpen={boolean('isOpen', false)} />
));