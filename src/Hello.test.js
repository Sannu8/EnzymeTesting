import React from 'react';
import Hello from './Hello';

import { shallow } from 'enzyme';

it('renders the given name', () => {
    const wrapper = shallow(<Hello name="Sandhya" />);
    expect(wrapper.find('p').text()).toEqual('Hello, Sandhya!');
})

it('uses "Stranger" if no name is passed in', () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.find('p').text()).toEqual("Hello, Stranger!")
})