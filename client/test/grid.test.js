import test from 'ava';
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { Grid } from '../src/components';

test('<Grid /> should render without props', t => {
    const wrapper = shallow(<Grid />);
    t.is(wrapper.find('div').length, 1);
});