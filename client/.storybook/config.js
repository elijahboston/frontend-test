import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src/contexts';
import '../src/css/global.css';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

configure(require.context('../src/components', true, /\.stories\.js$/), module);