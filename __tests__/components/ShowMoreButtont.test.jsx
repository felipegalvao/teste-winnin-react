import React from 'react';
import chai from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import ShowMoreButton from '../../app/components/ShowMoreButton.jsx';

var expect = chai.expect;

describe('ShowMoreButton', () => {
    it('should render a button if posts to show is less or equal than 10 and currentPosts.length > 10', () => {
        var posts = []
        for (var i = 0; i<30; i++) {
            posts.push(
                {
                    id: i,
                    title: "Title " + i
                }
            )
        }        

        var showMoreButton = shallow(<ShowMoreButton postsToShow={20} currentPosts={posts} />)
        expect(showMoreButton.find('Button').length).to.equal(1);
    })

    it('should not render a button if posts length lesser than 10', () => {
        var posts = []
        for (var i = 0; i<5; i++) {
            posts.push(
                {
                    id: i,
                    title: "Title " + i
                }
            )
        }        

        var showMoreButton = shallow(<ShowMoreButton postsToShow={10} currentPosts={posts} />)
        expect(showMoreButton.find('Button').length).to.equal(0);
    })

    it('should not render a button if posts to show is bigger than posts length', () => {
        var posts = []
        for (var i = 0; i<15; i++) {
            posts.push(
                {
                    id: i,
                    title: "Title " + i
                }
            )
        }        

        var showMoreButton = shallow(<ShowMoreButton postsToShow={20} currentPosts={posts} />)
        expect(showMoreButton.find('Button').length).to.equal(0);
    })

    it('should call onShowMorePosts when Button is clicked', () => {
        var posts = []
        for (var i = 0; i<30; i++) {
            posts.push(
                {
                    id: i,
                    title: "Title " + i
                }
            )
        }       

         const spy = sinon.spy();
         var showMoreButton = shallow(<ShowMoreButton postsToShow={20} currentPosts={posts} onShowMorePosts={spy} />)
         
         showMoreButton.find('Button').first().simulate('click');
         expect(spy.calledOnce).to.be.true;         
    })
})