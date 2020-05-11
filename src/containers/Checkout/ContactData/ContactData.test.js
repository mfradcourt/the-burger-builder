import React from 'react';
import { shallow } from "enzyme";

import { ContactData } from './ContactData';

describe('<ContactData />', () => {
  let wrapper;

  it('should render a default ContactData', () => {
    wrapper = shallow(
      <ContactData/>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default ContactData with a Spinner when loading is true', () => {
    wrapper = shallow(
      <ContactData/>
    );

    wrapper.setState({loading: true});
    expect(wrapper).toMatchSnapshot();
  });

  it('checkValidity', () => {
    wrapper = shallow(
      <ContactData/>
    );

    const instance = wrapper.instance();

    expect(wrapper).toMatchSnapshot();
    expect(instance.checkValidity('Name', {})).toBe(true);
    expect(instance.checkValidity('Name', {required: true})).toBe(true);
    expect(instance.checkValidity('', {required: true})).toBe(false);
    expect(instance.checkValidity('Name', {required: false})).toBe(true);

    expect(
      instance.checkValidity(
        'Zip', 
        {
          required: true,
          minLength: 5,
          maxLength: 5
        }
      )
    ).toBe(false);

    expect(
      instance.checkValidity(
        'Zip', 
        {
          required: true,
          minLength: 3,
          maxLength: 5
        }
      )
    ).toBe(true);

    expect(
      instance.checkValidity(
        'ZipCo', 
        {
          required: true,
          minLength: 3,
          maxLength: 5
        }
      )
    ).toBe(true);

  });
});
