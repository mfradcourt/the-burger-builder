import React from 'react';
import { shallow } from "enzyme";

import OrderSummary from './OrderSummary';

describe('<OrderSummary />', () => {
  let wrapper;

  const ingredients = {
    salad: 1,
    meat: 1,
    cheese: 1,
    bacon: 1
  };

  it('should render OrderSummary', () => {
    wrapper = shallow(
      <OrderSummary
        ingredients={ingredients}
        purchaseCancelled={() => {return true;}}
        purchaseContinued={() => {return true;}}
        price={50.0001}
      />
    );

    expect(wrapper.find('Fragment').html()).toEqual('<h3>Your Order</h3><p>A delicious burger with the following ingredients:</p><ul><li><span style="text-transform:capitalize">salad</span>: 1</li><li><span style="text-transform:capitalize">meat</span>: 1</li><li><span style="text-transform:capitalize">cheese</span>: 1</li><li><span style="text-transform:capitalize">bacon</span>: 1</li></ul><p><strong>Total price: 50.00</strong></p><p>Continue to checkout?</p><button class="Button Danger">CANCEL</button><button class="Button Success">CONTINUE</button>');
  });
});
