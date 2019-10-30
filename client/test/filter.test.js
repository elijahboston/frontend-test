import test from 'ava';
import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { Filter } from '../src/components';
import { AppProvider } from '../src/contexts';

const options = [
    { title: 'Sushi', alias: 'Sushi' },
    { title: 'Burgers', alias: 'Burgers' },
    { title: 'Japanese', alias: 'Japanese' },
    { title: 'New American', alias: 'New American' },
    { title: 'Gastropub', alias: 'Gastropub' },
  ];  

test('Should render without props', t => {
    const wrapper = mount(<Filter />,);
    
    t.is(wrapper.find('.filter').length, 1, 'Filter component');
    t.is(wrapper.find('.open-now-toggle').length, 1, 'Open Now toggle component');
    t.is(wrapper.find('.select').length, 2, 'Dropdown filter components');
});

test('"Open Now" toggle should display icon when clicked', t => {
    const wrapper = mount(<AppProvider><Filter /></AppProvider>);
    
    wrapper.find('.open-now-toggle').simulate('click');

    t.is(wrapper.find('.open-now-toggle i').length, 1);
});

test('Dropdown is visible after clicking <Select> title', t => {
    const wrapper = mount(
        <AppProvider>
            <Filter categoryOptions={options} priceOptions={options} />
        </AppProvider>
    );

    wrapper.find('.title').first().simulate('click');

    t.is(wrapper.find('ul.dropdown').length, 1, 'Dropdown not visible after click');
    t.is(wrapper.find('ul.dropdown li').length, 5, 'Not all options are displayed');
});

test('<Select> displays checkmark after selecting an option in the dropdown', t => {
    const wrapper = mount(
        <AppProvider>
            <Filter categoryOptions={options} priceOptions={options} />
        </AppProvider>
    );

    // expand menu and click option
    wrapper.find('.title').first().simulate('click');
    wrapper.find('ul li').at(2).simulate('click');
    
    t.is(wrapper.find('ul li').at(2).find('i').length, 1, 'Checkmark not displayed');
});