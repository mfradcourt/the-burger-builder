import React from 'react';
import { shallow } from "enzyme";

import BurgerIngredient from "./BurgerIngredient";

describe('<Burger />', () => {
  let wrapper;

  it('should not render BurgerIngredient when type in unknown', () => {
    wrapper = shallow(
      <BurgerIngredient type="unknown"/>
    );

    expect(wrapper.find('div')).toHaveLength(0);
  });

  it('should render BurgerIngredient when type is bread-bottom', () => {
    wrapper = shallow(
      <BurgerIngredient type="bread-bottom"/>
    );

    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').first().html()).toEqual('<div class="BreadBottom"></div>');
  });

  it('should render BurgerIngredient when type is bread-top', () => {
    wrapper = shallow(
      <BurgerIngredient type="bread-top"/>
    );

    expect(wrapper.find('div')).toHaveLength(3);
    expect(wrapper.find('div').first().html()).toEqual('<div class="BreadTop"><div class="Seeds1"></div><div class="Seeds2"></div></div>');
  });

  it('should render BurgerIngredient when type is meat', () => {
    wrapper = shallow(
      <BurgerIngredient type="meat"/>
    );

    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').first().html()).toEqual('<div class="Meat"></div>');
  });

  it('should render BurgerIngredient when type is cheese', () => {
    wrapper = shallow(
      <BurgerIngredient type="cheese"/>
    );

    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').first().html()).toEqual('<div class="Cheese"></div>');
  });

  it('should render BurgerIngredient when type is salad', () => {
    wrapper = shallow(
      <BurgerIngredient type="salad"/>
    );

    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').first().html()).toEqual('<div class="Salad"></div>');
  });

  it('should render BurgerIngredient when type is bacon', () => {
    wrapper = shallow(
      <BurgerIngredient type="bacon"/>
    );

    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').first().html()).toEqual('<div class="Bacon"></div>');
  });
});
