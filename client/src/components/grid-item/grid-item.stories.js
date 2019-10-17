import React from 'react';
import GridItem from '.';
import Grid from '../grid';
import { gridItemData } from '../../storybook-helpers/_mock-data';

export default { title: 'Grid Item' };

export const withContent = () => <Grid rows={2}><GridItem { ...gridItemData } /></Grid>;