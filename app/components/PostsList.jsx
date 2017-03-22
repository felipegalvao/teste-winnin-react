import React, { Component } from 'react';

import Post from "./Post.jsx";

class PostsList extends Component {
    render() {
        var {posts, currentCategory} = this.props;

        var renderPosts = () => {
            if (currentCategory === null) {
                return (<p className="text-center">Por favor, selecione uma categoria através dos botões acima para exibir os posts.</p>)
            } else if (posts.length === 0) {
                return (<p className="text-center">Não existem posts nesta categoria</p>)
            } else {
                return posts.map((post) => {
                    return (
                        <Post key={post.data.id} {...post.data} />
                    )
                })
            }
            
        }

        return (
            <div className="user-posts-list">
                {renderPosts()}
            </div>
        );
    }
}

export default PostsList;