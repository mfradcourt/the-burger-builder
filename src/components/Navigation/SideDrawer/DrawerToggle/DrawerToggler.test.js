import React from 'react';
import { shallow } from "enzyme";

import DrawerToggle from './DrawerToggle';

describe('<DrawerToggle />', () => {
  let wrapper;

  it('should render DrawerToggle', () => {
    wrapper = shallow(
      <DrawerToggle/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
