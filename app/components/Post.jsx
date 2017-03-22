import React, { Component } from 'react';
import moment from 'moment';

class Post extends Component {
    render() {
        var {title, thumbnail, url, domain, created_utc, author} = this.props;

        var renderPostThumb = () => {
            if (thumbnail.indexOf("http") < 0) {
                return (<img src="http://placehold.it/200x200" alt="" className="img img-responsive" />)
            } else {
                return (<img src={thumbnail} alt="" className="img img-responsive" />)
            }
        }

        return (
            <div className="row row-post">
                <div className="col-sm-1 col-thumb">
                    {renderPostThumb()}
                </div>
                <div className="col-sm-11">
                    <h4><a href={url} target="_blank">{title}</a></h4>
                    <p className="p-date-difference">{moment.unix(created_utc).fromNow()} por {author}</p>
                    <p className="p-post-domain"><a href={url} target="_blank">{domain}</a></p>
                </div>
            </div>
        );
    }
}

export default Post;