import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './app';

configure({ adapter: new Adapter() });

test('App component renders', t => {
	const wrapper = shallow(<App/>);
	t.true(wrapper.contains(<div>Hello World</div>));
});
