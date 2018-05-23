import React from 'react';
import { shallow } from "enzyme";
import BlogCreatePage from '../../components/BlogCreatePage';

test('BlogCreatePage to render correctly', () => {
  const wrapper = shallow(<BlogCreatePage/>);
  expect(wrapper).toMatchSnapshot();
})
