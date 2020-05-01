import React from 'react';
import { shallow } from "enzyme";

import Burger from './Burger';

describe('<Burger />', () => {
  let wrapper;

  const ingredients = {
    salad: 1,
    meat: 1,
    cheese: 1,
    bacon: 1
  };

  it('should render Burger with all the ingredients', () => {
    wrapper = shallow(
      <Burger
        ingredients={ingredients}
      />
    );

    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').html()).toEqual('<div class="Burger"><div class="BreadTop"><div class="Seeds1"></div><div class="Seeds2"></div></div><div class="Salad"></div><div class="Meat"></div><div class="Cheese"></div><div class="Bacon"></div><div class="BreadBottom"></div></div>');
  });

  it('should render Burger without ingredients', () => {
    wrapper = shallow(
      <Burger
        ingredients={{}}
      />
    );

    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').html()).toEqual('<div class="Burger"><div class="BreadTop"><div class="Seeds1"></div><div class="Seeds2"></div></div><p>Please start adding ingredients</p><div class="BreadBottom"></div></div>');
  });
});
