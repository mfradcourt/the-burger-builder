import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { create } from 'react-test-renderer';

import Checkout from './Checkout';

const mockStore = configureStore([]);

describe('<Checkout />', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
    });

    const path = '/checkout';

    const match = {
      isExact: false,
      path,
      url: path,
      params: { price: 4.00, ingredients: {} }
    };

    component = create(
      <Provider store={store}>
        <Checkout 
          match={match}
        />
      </Provider>
    );
  });

  it('should render Checkout', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
