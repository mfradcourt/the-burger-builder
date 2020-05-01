import React from 'react';
import { shallow } from "enzyme";

import Modal from './Modal';
import Backdrop from '../Backdrop/Backdrop';

describe('<Modal />', () => {
  let wrapper;

  it('should render Modal', () => {
    wrapper = shallow(
      <Modal show={true}>Here is the content</Modal>
    );
    expect(wrapper.find(Backdrop)).toHaveLength(1);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').html()).toEqual('<div class="Modal" style="transform:translateY(0);opacity:1">Here is the content</div>');
  });

  it('should render Modal but hide it with css', () => {
    wrapper = shallow(
      <Modal show={false}>Here is the content</Modal>
    );
    expect(wrapper.find(Backdrop)).toHaveLength(1);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').html()).toEqual('<div class="Modal" style="transform:translateY(-100vh);opacity:0">Here is the content</div>');
  });
});
