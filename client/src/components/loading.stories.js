import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from './loading';

const stories = storiesOf('Loading', module);


stories.add('Default', () => (
  <Loading />
));

stories.add('Full Screen', () => (
  <div>
    <Loading isFullScreen={true} />
    <style jsx global>{`
      body {
        background: url(https://picsum.photos/id/107/200/200);
        background-size: cover;
      }
    `}</style>
  </div>
));