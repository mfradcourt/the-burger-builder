import React from 'react';
import { shallow } from "enzyme";

import { Orders } from './Orders';

describe('<Orders />', () => {
  let wrapper;

  it('should render a default Orders', () => {
    wrapper = shallow(
      <Orders/>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render Orders when there are orders', () => {
    const orders = [
      {
        id: 1,
        ingredients: {
          meat: 2,
          salad: 5
        },
        price: 10
      },
      {
        id: 2,
        ingredients: {
          meat: 6,
          salad: 5
        },
        price: 25
      }
    ];

    wrapper = shallow(
      <Orders/>
    );

    wrapper.setState({orders: orders});
    expect(wrapper).toMatchSnapshot();
  });
});
