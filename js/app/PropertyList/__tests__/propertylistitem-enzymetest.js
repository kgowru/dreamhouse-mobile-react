'use strict'

require('react-native-mock/mock');
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import {sobjData} from '../../../test';

describe('<PropertyListItem/>', () => {
  let PropertyListItem;

  before(()=>{
    PropertyListItem = require('../ListItem');
  })

  it('should return the right content from helper functions', () => {
    let navigator = [],
        routes = {
        },
        context = {
          sobj : sobjData
        };

    const wrapper = shallow(<PropertyListItem navigator={navigator} routes={routes}/>, {context});
    expect(wrapper.instance().getTitle()).to.equal('Architectural Details');
    expect(wrapper.instance().getDetail()).to.equal('Boston, MA ● $690000');
  });

  it('should show detail page on click', ()=>{
    let navigator = [],
        routes = {
        },
        context = {
          sobj : sobjData
        };

    const wrapper = shallow(<PropertyListItem navigator={navigator} routes={routes}/>, {context});

    const touchable = wrapper.findWhere(node => node.name() === 'TouchableOpacity');
    touchable.simulate('press');
    wrapper.update();

    expect(navigator.length).to.equal(1);
    expect(navigator[0].name).to.equal('propertyDetail');
  })
});
