import React from 'react';
import { shallow } from "enzyme";

import Logo from './Logo';

describe('<Logo />', () => {
  let wrapper;

  it('should render Logo', () => {
    wrapper = shallow(
      <Logo/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
