import React from 'react';
import { shallow } from "enzyme";

import Order from './Order';

describe('<Order />', () => {
  let wrapper;

  it('should render Order', () => {
    wrapper = shallow(
      <Order/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
