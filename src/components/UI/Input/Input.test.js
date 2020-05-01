import React from 'react';
import { shallow } from "enzyme";

import Input from './Input';

describe('<Input />', () => {
  let wrapper;

  it('should render default Input with undefined value and label when not receiving any props', () => {
    wrapper = shallow(<Input/>);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('input').prop('value')).toEqual(undefined);
    expect(wrapper.find('input').html()).toEqual('<input class="InputElement"/>');
  });

  describe('when receiving props', () => {
    it('should render input Input', () => {
      wrapper = shallow(
        <Input
          elementType='input'
          elementConfig={{
            type: 'text',
            placeholder: 'Your Name'
          }}
          value='Myself'
          invalid={false}
          shouldValidate={true}
          touched={false}
          changed={() => {return true;}}
        />);

      expect(wrapper.find('input')).toHaveLength(1);
      expect(wrapper.find('input').prop('value')).toEqual('Myself');
      expect(wrapper.find('input').html()).toEqual('<input type="text" class="InputElement" placeholder="Your Name" value="Myself"/>');
    });

    it('should render input Input with Invalid css', () => {
      wrapper = shallow(
        <Input
          elementType='input'
          elementConfig={{
            type: 'text',
            placeholder: 'Your Name'
          }}
          value=''
          invalid={true}
          shouldValidate={true}
          touched={true}
          changed={() => {return true;}}
        />
      );

      expect(wrapper.find('input')).toHaveLength(1);
      expect(wrapper.find('input').prop('value')).toEqual('');
      expect(wrapper.find('input').html()).toEqual('<input type="text" class="InputElement Invalid" placeholder="Your Name" value=""/>');
    });

    it('should render textarea Input', () => {
      wrapper = shallow(
        <Input
          elementType='textarea'
        />
      );
      expect(wrapper.find('textarea')).toHaveLength(1);
      expect(wrapper.find('textarea').prop('value')).toEqual(undefined);
      expect(wrapper.find('textarea').html()).toEqual('<textarea class="InputElement"></textarea>');
    });

    it('should render select Input', () => {
      wrapper = shallow(
        <Input
          elementType='select'
          elementConfig={{
            options: [
              {value: 'fastest', displayValue: 'Fastest'},
              {value: 'cheapest', displayValue: 'Cheapest'}
            ]
          }}
        />
      );
      expect(wrapper.find('select')).toHaveLength(1);
      expect(wrapper.find('option')).toHaveLength(2);
      expect(wrapper.find('select').prop('value')).toEqual(undefined);
      expect(wrapper.find('select').html()).toEqual('<select class="InputElement"><option value="fastest">Fastest</option><option value="cheapest">Cheapest</option></select>');
    });
  });
});
