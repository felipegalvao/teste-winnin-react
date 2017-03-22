import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Navigation extends Component {
    handleSetCategory = (category) => {
        this.props.onSetCategory(category);
    }

    render() {
        var {currentCategory} = this.props;

        return (
            <div className="row row-navigation">
                <div className="col-sm-6 col-sm-offset-3">
                    <div className={currentCategory === "hot" ? "col-sm-4 col-active" : "col-sm-4"}>
                        <Button block onClick={() => this.handleSetCategory("hot")}>Hot</Button>
                    </div>
                    <div className={currentCategory === "new" ? "col-sm-4 col-active" : "col-sm-4"}>
                        <Button block onClick={() => this.handleSetCategory("new")}>New</Button>
                    </div>
                    <div className={currentCategory === "rising" ? "col-sm-4 col-active" : "col-sm-4"}>
                        <Button block onClick={() => this.handleSetCategory("rising")}>Rising</Button>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Navigation;