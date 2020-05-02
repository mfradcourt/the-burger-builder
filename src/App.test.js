import React from 'react';
import { shallow } from "enzyme";

import App from './App';

describe('<App />', () => {
  let wrapper;

  it('should render a default App', () => {
    wrapper = shallow(
      <App/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
