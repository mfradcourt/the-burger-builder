import React from 'react';
import { shallow } from "enzyme";

import SideDrawer from './SideDrawer';

describe('<SideDrawer />', () => {
  let wrapper;

  it('should render SideDrawer as close', () => {
    wrapper = shallow(
      <SideDrawer/>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render SideDrawer as open', () => {
    wrapper = shallow(
      <SideDrawer/>
    );

    wrapper.setProps({open: true})

    expect(wrapper).toMatchSnapshot();
  });
});
