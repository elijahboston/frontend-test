import test from 'ava';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Grid from './grid';
import GridItem from './grid-item';
import { gridItemData } from '../../test-helpers/_mock-data';

configure({ adapter: new Adapter() });

test('Grid component renders with items', t => {
    const wrapper = shallow(<Grid items={[gridItemData, gridItemData]}/>);
    t.true(wrapper.find(GridItem).length === 2);
});
