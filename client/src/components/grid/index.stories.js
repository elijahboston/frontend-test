import React from 'react';
import Grid from '.';
import GridItem from '../grid-item';

const gridItemData = {
  "name": "Yardbird Southern Table & Bar",
  "alias": "yardbird-southern-table-and-bar-las-vegas",
  "photos": [
    "https://picsum.photos/300/300"
  ],
  "rating": 4.5,
  "price": "$$",
  "categories": [
    {
      "title": "Southern",
      "alias": "southern"
    },
    {
      "title": "American (New)",
      "alias": "newamerican"
    }
  ],
  "is_closed": false // eslint-disable-line camelcase
};

export default { title: 'Grid' };

const buildGrid = (n) => {
  const items = [];
  while (n > items.length) {
    items.push(<GridItem id={items.length} { ...gridItemData } isClosed={gridItemData.is_closed} />)
  }

  return items
}

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