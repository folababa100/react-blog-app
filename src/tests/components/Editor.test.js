import React from 'react';
import { shallow } from "enzyme";
import Editor from '../../components/Editor';

test('should render Editor correctely', () => {
  const wrapper = shallow(<Editor />);
  expect(wrapper).toMatchSnapshot()
})

