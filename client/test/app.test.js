import test from 'ava';
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from '../src/app';

test('should render without errors', t => {
    const wrapper = shallow(<App />,);
    t.is(wrapper.find(<main />).html(), 1);
});