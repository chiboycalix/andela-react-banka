import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wrapper from '../components/Wrapper/Wrapper';

configure({ adapter: new Adapter() });

describe('Wrapper component', () => {
  it('should render wrapper component without error', () => {
    shallow(<Wrapper />);
  });

  it('should render if a class of creditcard exists', () => {
    const wrapperComponent = shallow(<Wrapper />);
    const logo = wrapperComponent.find('[data-test=\'creditcard\']');
    expect(logo.length).toBe(1);
  });
});
