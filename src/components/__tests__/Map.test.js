import React from 'react';
import setupTest from '../../setupTest';
import { shallow } from 'enzyme';
import Map from '../Map';

describe('Map', function() {
  let mountedMap;
  let props;

  beforeEach(() => {
    props = {
      location: undefined,
      imagename: 'testmap.png'
    };

    mountedMap = shallow(<Map {...props} />);
  })

  it('renders an image', () => {
    const image = mountedMap.find('img');
    expect(image.length).toBe(1);
  });

  it('displays the default image when no params are given', () => {
    let defaultMap = shallow(<Map />);
    const defaultImage = defaultMap.find('img').findWhere((img) => img.prop("src") === "images/none.png");
    expect(defaultImage.length).toBe(1);
  })

  it('displays the image passed to it', () => {
    const imgName = mountedMap.find('img').findWhere((img) => img.prop("src") === "images/testmap.png");
    expect(imgName.length).toBe(1);
  });
})
