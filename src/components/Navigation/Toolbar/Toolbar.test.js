import React from 'react';
import { shallow } from "enzyme";

import Toolbar from './Toolbar';

describe('<Toolbar />', () => {
  let wrapper;

  it('should render Toolbar', () => {
    wrapper = shallow(
      <Toolbar/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
