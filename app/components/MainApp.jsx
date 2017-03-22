import React, { Component } from 'react';

import redditAPI from '../api/redditAPI.jsx';
import Navigation from './Navigation.jsx';
import PostsList from './PostsList.jsx';
import ShowMoreButton from './ShowMoreButton.jsx';

class MainApp extends Component {
    constructor(props) {
        super(props);

        this.state = {                        
            currentPosts: [],
            currentCategory: null,            
            postsToShow: 0
        }        
    }   

    handleSetCategoryAndGetPosts = (category) => {
        var that = this;

        var {subReddit} = this.props;
        var apiURL = "https://www.reddit.com/r/" + subReddit + "/" + category + ".json?sort=new";        

        redditAPI.getSubredditPosts(apiURL).then(function (posts) {
            var postsToShow = posts.length <= 10 ? posts.length : 10;

            that.setState({
                currentPosts: posts,
                currentCategory: category,
                postsToShow
            });
        })
    }

    handleShowMorePosts = () => {
        console.log("handle show more posts")
        this.setState({
            postsToShow: this.state.postsToShow + 10
        });
    }

    render() {
        var {currentPosts, currentCategory, postsToShow} = this.state;        

        var posts = currentPosts.slice(0, postsToShow);

        return (
            <div>
                <div>
                    <div className="page-title">
                        <h1>REACT<span className="span-title-js">JS</span></h1>
                    </div>
                </div>
                <div className="container">                
                    <Navigation onSetCategory={this.handleSetCategoryAndGetPosts} currentCategory={currentCategory} />
                    <PostsList posts={posts} currentCategory={currentCategory} />
                    <ShowMoreButton postsToShow={postsToShow} currentPosts={currentPosts} onShowMorePosts={this.handleShowMorePosts} />
                </div>
            </div>
        );
    }
}

export default MainApp;