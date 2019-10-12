import test from 'ava';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './app';

configure({ adapter: new Adapter() });

test('Renders without crashing', t => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);

    // If we make it through rendering we're good here
    t.pass();
});

test('<App /> component renders', t => {
    const wrapper = shallow(<App/>);

    t.true(wrapper.find('div').length > 0);
});
