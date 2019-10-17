import React from 'react';
import GridItem from '.';
import { gridItemData } from '../../storybook-helpers/_mock-data';

export default { title: 'Grid Item' };

export const withContent = () => <GridItem { ...gridItemData } />;

export const withLongName = () => <GridItem { ...gridItemData } name={'Le Capybara Cafe on 47th Street'} />;