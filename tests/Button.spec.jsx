import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../src/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  it('should render correctly', () => {
    mount(<Button />);
  });
  it('props loading', () => {
    const wrapper = mount(<Button loading />);
    expect(wrapper.find('.kuma-button-loading-icon').length).not.to.be(0);
  });
});
