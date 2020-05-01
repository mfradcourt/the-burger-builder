import React from 'react';
import { shallow } from "enzyme";

import BuildControls from './BuildControls';

describe('<BuildControls />', () => {
  let wrapper;

  const disabledInfo = {
    salad: true,
    meat: true,
    cheese: false,
    bacon: false
  };

  it('should render BuildControls', () => {
    wrapper = shallow(
      <BuildControls
        disabled={disabledInfo}
        price={50}
      />
    );

    expect(wrapper).toMatchSnapshot();
 });
});
