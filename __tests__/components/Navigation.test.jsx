import React from 'react';
import chai from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Navigation from '../../app/components/Navigation.jsx';

var expect = chai.expect;

describe('Navigation', () => {
    it('should render three buttons', () => {
        var nav = shallow(<Navigation/>)
        expect(nav.find('Button').length).to.equal(3);
    })

    it('should call onSetCategory with the right category when a Button is clicked', () => {
        const spy = sinon.spy();
        var nav = shallow(<Navigation onSetCategory={spy} />);
        nav.find('Button[children="Hot"]').first().simulate('click');
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith("hot")).to.be.true;
    })
})