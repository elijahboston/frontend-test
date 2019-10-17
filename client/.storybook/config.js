import { configure } from '@storybook/react';

import '../src/storybook-helpers/global.css';

configure(require.context('../src/components', true, /\.stories\.js$/), module);