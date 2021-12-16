import { shallow } from 'enzyme';
import Header from '../Header';
import setupTest from '../../setupTest';

describe('Header', function() {
  let mountedHeader;

  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  })

  it('rendors without crashing', () => {
    mountedHeader = shallow(<Header />);
  })

  it('renders a logo', ()=> {
    const logoImg = mountedHeader.find('img').findWhere((img) => img.prop("src") === "images/wire-brain-logo.png");
    expect(logoImg.length).toBe(1);
    //expect(logoImg.prop("src")).toEqual("images/logo192.png");
  })
})
