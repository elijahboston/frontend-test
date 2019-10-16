import { configure } from '@storybook/react';

import '../src/storybook-helpers/global.css';

configure(require.context('../src', true, /\.stories\.js$/), module);