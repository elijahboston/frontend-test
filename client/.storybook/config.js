import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import '../src/storybook-helpers/global.css';
import { AppProvider, ThemeProvider } from '../src/contexts';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

configure(require.context('../src/components', true, /\.stories\.js$/), module);