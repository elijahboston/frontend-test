import React from 'react';
import Grid from '.';
import { buildGrid } from '../../test-helpers/_helpers';

export default { title: 'Grid' };

export const withOneItem = () =>
  <Grid>
    {buildGrid(1)}
  </Grid>;

export const withFourItems = () =>
  <Grid>
    {buildGrid(4)}
  </Grid>;

export const withEightItems = () =>
  <Grid>
    {buildGrid(8)}
  </Grid>;