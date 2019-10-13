import React from 'react';
import Grid from '.';
import GridItem from '.';

const gridItemData = {
  "name": "Yardbird Southern Table & Bar",
  "alias": "yardbird-southern-table-and-bar-las-vegas",
  "photos": [
    "https://picsum.photos/300/300"
  ],
  "rating": 4.5,
  "price": "$$",
  "is_closed": false // eslint-disable-line camelcase
};

export default { title: 'Grid Item' };

export const withContent = () => <GridItem { ...gridItemData } isClosed={gridItemData.is_closed} />;

export const withLongName = () => <GridItem { ...gridItemData } isClosed={gridItemData.is_closed} name={'Le Capybara Cafe on 47th Street'} />;
