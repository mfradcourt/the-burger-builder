import React from 'react';
import { shallow } from "enzyme";

import Backdrop from './Backdrop';

describe('<Backdrop />', () => {
  let wrapper;

  it('should render Backdrop', () => {
    wrapper = shallow(<Backdrop show={true}/>);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').html()).toEqual('<div class="Backdrop"></div>');
  });

  it('should not render Backdrop', () => {
    wrapper = shallow(<Backdrop show={false}/>);
    expect(wrapper.find('div')).toHaveLength(0);
  });
});
