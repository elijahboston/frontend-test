import { configure } from '@storybook/react';

import '../static/global.css';

configure(require.context('../src', true, /\.stories\.js$/), module);