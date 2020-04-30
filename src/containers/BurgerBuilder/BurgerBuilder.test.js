import React from 'react';
import { shallow } from "enzyme";

import { BurgerBuilder } from './BurgerBuilder';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

describe('<BurgerBuilder />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder />);
  });

  it('should display message if ingredients cant be loaded', () => {
    expect(wrapper.contains('Ingredients can\'t be loaded!'));
  });

  it('should render BuildControls when receiving ingredients', () => {
    wrapper.setState({ingredients: {salad: 0}});
    expect(wrapper.find(Burger)).toHaveLength(1);
    expect(wrapper.find(BuildControls)).toHaveLength(1);
    expect(wrapper.find(OrderSummary)).toHaveLength(1);
  });
});
