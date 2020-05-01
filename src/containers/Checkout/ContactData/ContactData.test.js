import React from 'react';
import { shallow } from "enzyme";

import ContactData from './ContactData';

describe('<ContactData />', () => {
  let wrapper;

  it('should render ContactData', () => {
    wrapper = shallow(
      <ContactData/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
