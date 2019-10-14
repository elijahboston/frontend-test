import { configure } from '@storybook/react';

import '../src/static/global.css';

configure(require.context('../src', true, /\.stories\.js$/), module);