import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import PostsList from '../../app/components/PostsList.jsx';

var expect = chai.expect;

describe('PostsList', () => {
    it('should render message if no post is passed', () => {
        var posts = []
        var postsList = shallow(<PostsList posts={posts} />)
        expect(postsList.find('p').length).to.equal(1);
    })

    it('should render one Post component for each item in the array passed', () => {
        var posts = [
            {   
                data: {
                    id: 1,
                    title: "Post title 1", 
                    thumbnail: "self", 
                    url: "http://www.google.com", 
                    domain: "google.com",
                    created_utc: 15000000,
                    author: "author1"
                }
                
            },
            {   
                data: {
                    id: 2,
                    title: "Post title 1", 
                    thumbnail: "self", 
                    url: "http://www.google.com", 
                    domain: "google.com",
                    created_utc: 15000000,
                    author: "author1"
                }
                
            }
        ]

        var postsList = shallow(<PostsList posts={posts} />)
        expect(postsList.find('Post').length).to.equal(2);
    })
})