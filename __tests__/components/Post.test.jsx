import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Post from '../../app/components/Post.jsx';

var expect = chai.expect;

describe('Post', () => {
    let postData;
    let post;


    beforeEach(() => {
        postData = {
            id: 1,
            title: "Post title 1", 
            thumbnail: "self", 
            url: "http://www.google.com", 
            domain: "google.com",
            created_utc: 15000000,
            author: "author1"
        }
        post = shallow(<Post key={postData.id} {...postData} />);
    })

    it('should render a h4 element with the post title', () => {
        expect(post.find('h4').first().text()).to.equal(postData.title);        
    })

    it('should render a p element which contains the post author', () => {
        expect(post.find('.p-date-difference').first().text()).to.contain(postData.author);
    })

    it('should render a p element with the domain', () => {        
        expect(post.find('.p-post-domain').first().text()).to.be.equal(postData.domain);        
    })
})