import React from 'react';
import { shallow } from "enzyme";

import CheckoutSummary from './CheckoutSummary';

describe('<CheckoutSummary />', () => {
  let wrapper;

  it('should render CheckoutSummary', () => {
    wrapper = shallow(
      <CheckoutSummary/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
