import React from 'react';
import { shallow } from "enzyme";

import Layout from './Layout';

describe('<Layout />', () => {
  let wrapper;

  it('should render Layout', () => {
    wrapper = shallow(
      <Layout>My Content</Layout>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should set showSideDrawer to false', () => {
    wrapper = shallow(
      <Layout>My Content</Layout>
    );
    const instance = wrapper.instance();
    instance.setState({'showSideDrawer': true});
    expect(wrapper.state('showSideDrawer')).toBe(true);
    instance.sideDrawerClosedHandler();
    expect(wrapper.state('showSideDrawer')).toBe(false);
  });

  it('should toggle the value of showSideDrawer', () => {
    wrapper = shallow(
      <Layout>My Content</Layout>
    );
    const instance = wrapper.instance();
    instance.setState({'showSideDrawer': true});
    expect(wrapper.state('showSideDrawer')).toBe(true);
    instance.sideDrawerToggleHandler();
    expect(wrapper.state('showSideDrawer')).toBe(false);
    instance.sideDrawerToggleHandler();
    expect(wrapper.state('showSideDrawer')).toBe(true);
  });
});
