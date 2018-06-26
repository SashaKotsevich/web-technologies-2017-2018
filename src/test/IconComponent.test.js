import {Icon} from "../components/SearchPart";
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';  
configure({adapter: new Adapter()});
describe('Icon component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Icon clname="ttp"/>)
    });
    it('Icon Snapshot', () => {
        const rendered = renderer.create(<Icon clname="ttp"/>).toJSON();
        expect(rendered).toMatchSnapshot();
    });
    it('Icon Render', () => {
        expect(wrapper.length).toEqual(1);
    });
});
