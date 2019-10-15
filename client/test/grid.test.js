import test from 'ava';
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Grid from '../src/components/grid';

test('should render without items', t => {
    const wrapper = shallow(<Grid />,);
    t.is(wrapper.find('div').length, 1);
});