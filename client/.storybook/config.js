import { configure } from '@storybook/react';

import '../static/global.css';
import '../static/icons.css';

configure(require.context('../src', true, /\.stories\.js$/), module);