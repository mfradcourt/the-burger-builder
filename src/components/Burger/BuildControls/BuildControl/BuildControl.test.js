import React from 'react';
import { shallow } from "enzyme";

import BuildControl from './BuildControl';

describe('<BuildControl />', () => {
  let wrapper;

  it('should render BuildControl', () => {
    wrapper = shallow(
      <BuildControl
        key='Test'
        label='Test'
        added={() => {return true;}}
        removed={() => {return true;}}
        disabled={false}
      />
    );
    expect(wrapper.find('div')).toHaveLength(2);
    expect(wrapper.find('div').first().html()).toEqual('<div class="BuildControl"><div class="Label">Test</div><button class="Less">Less</button><button class="More">More</button></div>');
  });
});
