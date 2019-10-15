import React from 'react';
import GridItem from '../components/grid-item';
import { gridItemData } from './_mock-data';

export const buildGrid = (n) => {
  const items = [];
  while (n > items.length) {
    items.push(<GridItem key={items.length} { ...gridItemData } isClosed={gridItemData.is_closed} />)
  }

  return items
}

export const mockGridItems = (n) => {
  const items = [];
  while (n > items.length) {
    items.push({ id: items.length, ...gridItemData });
  }

  return items
}