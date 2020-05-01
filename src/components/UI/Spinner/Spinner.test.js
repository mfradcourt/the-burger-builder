import React from 'react';
import { shallow } from "enzyme";

import Spinner from './Spinner';

describe('<Spinner />', () => {
  let wrapper;

  it('should render Spinner', () => {
    wrapper = shallow(
      <Spinner/>
    );
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').html()).toEqual('<div class="Loader">Loading...</div>');
  });
});
