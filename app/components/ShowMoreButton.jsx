import React, { Component } from 'react';

import {Button} from 'react-bootstrap';

class ShowMoreButton extends Component {
    handleShowMorePosts = () => {        
        this.props.onShowMorePosts();
    }

    render() {
        var {postsToShow, currentPosts} = this.props;

        var renderShowMoreButton = () => {
            if ((postsToShow <= 10 && currentPosts.length <= 10) || (postsToShow >= currentPosts.length)) {
                return (<div></div>);
            } else {
                return (
                    <div className="row">
                        <div className="col-sm-12 col-btn-show-more">
                            <Button className="btn-show-more" block onClick={() => this.handleShowMorePosts()}>
                                + Ver Mais
                            </Button>
                        </div>
                    </div>
                )                
            }
        }

        return (
            <div>
                {renderShowMoreButton()}
            </div>
        );
    }
}

export default ShowMoreButton;