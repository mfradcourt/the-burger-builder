import React from 'react';
import { shallow } from 'enzyme';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

describe('NavigationItems Component', () => {
  it('should render 3 NavigationItem elements', () => {
    const wrapper = shallow(<NavigationItems/>);
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
});
