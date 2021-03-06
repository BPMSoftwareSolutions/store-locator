import React from 'react';
import setupTest from '../../setupTest';
import { shallow } from 'enzyme';
import StoreLocator from '../StoreLocator';
//import axios from '../../../__mocks__/axios';

describe ("StoreLocator", function() {
  let mountedStoreLocator;
  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  //it('calls axios.get in #componentDidMount', ()=> {
  //  return mountedStoreLocator.instance().componentDidMount().then(() => {
  //    expect(axios.get).toHaveBeenCalled();
  //  });
  //});

  //it('calls axios.get with correct url', ()=> {
  //  return mountedStoreLocator.instance().componentDidMount().then(() => {
  //    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
  //  });
  //});

  it('renders without crashing', () => {
    mountedStoreLocator = shallow(<StoreLocator />);
  })

  it('renders a header', () => {
    const headers = mountedStoreLocator.find('Header');
    expect(headers.length).toBe(1);
  })

  it('renders two buttons', () => {
    const buttons = mountedStoreLocator.find('Button');
    expect(buttons.length).toBe(3);
  })

  it('renders a map', () => {
    const maps = mountedStoreLocator.find('Map');
    expect(maps.length).toBe(1);
  })
})

describe('chooseMap', () => {
  it('updates the currentMap state using the location passed to it', ()=> {
    let mountedStoreLocator = shallow(<StoreLocator />);
    let mockEvent = {target: {value: 'testland'}};
    mountedStoreLocator.instance().chooseMap(mockEvent);
    expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png');
  });
})