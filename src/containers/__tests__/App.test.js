import App from '../App';
import {shallow} from 'enzyme';
import setupTest from '../../setupTest';

describe("App", function() {
  it('renders a StoreLocator', () => {
    let mountedApp = shallow(<App />);
    const locators = mountedApp.find('StoreLocator');
    expect(locators.length).toBe(1);
  })
})