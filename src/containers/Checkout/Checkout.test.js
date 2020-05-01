import React from 'react';
import { shallow } from "enzyme";
import { createMemoryHistory, createLocation } from 'history';

import Checkout from './Checkout';

describe('<Checkout />', () => {
  let wrapper;

  it('should render Checkout', () => {
    const history = createMemoryHistory();
    const path = `/checkout`;

    const match = {
      isExact: false,
      path,
      url: path,
      params: { price: 4.00, ingredients: {} }
    };

    const location = createLocation(match.url);

    wrapper = shallow(
      <Checkout
        location={location}
        match={match}
        history={history}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
