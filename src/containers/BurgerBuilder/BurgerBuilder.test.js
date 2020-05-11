import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import ConnectedBurgerBuilder, { BurgerBuilder } from './BurgerBuilder';

const mockStore = configureStore([]);

describe('<BurgerBuilder />', () => {
  let store;
  let component;

  it('should render the connected BurgerBuilder with default state', () => {
    store = mockStore({
      ingredients: {
        salad: 1,
        bacon: 2,
        cheese: 2,
        meat: 3
      },
      totalPrice: 4
    });

    component = renderer.create(
      <Provider store={store}>
        <ConnectedBurgerBuilder />
      </Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render BurgerBuilder', () => {
    const component = renderer.create(
      <BurgerBuilder />
    );

    component.getInstance().setState({ loading: true });
    expect(component).toMatchSnapshot();
    component.getInstance().setState({ loading: false, error: true });
    expect(component).toMatchSnapshot();
  });
});
