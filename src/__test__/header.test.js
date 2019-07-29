import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header/Header';

configure({ adapter: new Adapter() });

describe('Header component', () => {
  it('should render Header component withour error', () => {
    shallow(<Header />);
  });
});
