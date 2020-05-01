import React from 'react';
import { shallow } from "enzyme";

import Button from './Button';

describe('<Button />', () => {
  let wrapper;

  it('should render Button', () => {
    wrapper = shallow(
      <Button
        clicked={() => {return true;}}
        btnType="Danger">CANCEL</Button>
    );
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').html()).toEqual('<button class="Button Danger">CANCEL</button>');
  });
});
