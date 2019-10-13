import test from 'ava';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Grid from './grid';

configure({ adapter: new Adapter() });

const gridItems = [
    {
      id: 0,
      name: 'Le Zoo',
      photos: ['https://picsum.photos/300/300']
    }
  ];

test('Grid component renders with items', t => {
    const wrapper = shallow(<Grid items={gridItems}/>);

    t.true(wrapper.find('item').length > 0);
});
