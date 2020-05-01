import React from 'react';
import { shallow, mount } from "enzyme";

import { BurgerBuilder } from './BurgerBuilder';

describe('<BurgerBuilder />', () => {
  let wrapper;

  it('should render BurgerBuilder', () => {
    wrapper = shallow(
      <BurgerBuilder/>
    );

    expect(wrapper).toMatchSnapshot();
    wrapper.instance().setState({loading: true});
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().setState({loading: false, error: true});
    expect(wrapper).toMatchSnapshot();
  });

  it('addIngredientHandler', () => {
    wrapper = shallow(
      <BurgerBuilder/>
    );
    wrapper.instance().setState({totalPrice: 4, ingredients:{}});
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().addIngredientHandler('meat');
    expect(wrapper.instance().state.totalPrice).toBe(5.3);
    expect(wrapper).toMatchSnapshot();
  });

  it('removeIngredientHandler', () => {
    wrapper = shallow(
      <BurgerBuilder/>
    );
    wrapper.instance().setState({totalPrice: 4.4, ingredients:{cheese:1}});
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().removeIngredientHandler('cheese');
    expect(wrapper.instance().state.totalPrice).toBe(4);
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().removeIngredientHandler('cheese');
    expect(wrapper.instance().state.totalPrice).toBe(4);
    expect(wrapper).toMatchSnapshot();
  });

});
