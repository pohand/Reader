import React, { Component } from 'react';
import Post from './Post';
import {loadPosts} from '../actions' 

class ListPost extends Component {

    // componentDidMount() {
    //     loadPosts()
    // }

    render() {
        return (
            <ol >
                {this.props.posts.map((post) => (
                    <li key={post.id} >
                        <Post post={post} />
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListPost
