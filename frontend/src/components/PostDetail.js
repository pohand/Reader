import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { loadPostById, loadCategories, loadComments } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import Post from './Post';
import Comment from './Comment';
import AddComment from './AddComment';

class PostDetail extends Component {
    componentDidMount() {
        const {
            match: { params: { category, post_id } },
            fetchPostById,
            fetchCategories,
            fetchComments
        } = this.props;
        fetchCategories();
        fetchPostById(post_id, category);
        fetchComments(post_id);
    }

    render() {
        const {
            match: { params: { category, post_id } },
            post, categories,
            comments
        } = this.props;

        return (
            <div className="container">
                <br />
                <div>
                    <Post post={post} />
                </div>

                <div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>User Comment</h3>
                        </div>
                    </div>
                    {comments.map((comment) => (
                        <div key={comment.id}>
                        <Comment comment={comment} />
                        </div>
                ))}
                </div>
                <br />
                <AddComment parentId={post_id} />
            </div >
        )
    }
}

function mapStateToProps(
    {
        post: { post },
        categories: { categories },
        comments: {comments}
    }, {
        match: { params: { post_id } }
    }) {
    return {
        post: post,
        categories: categories.map(category => category.name),
        comments: comments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPostById: (id, category) => dispatch(loadPostById(id, category)),
        fetchCategories: () => dispatch(loadCategories()),
        fetchComments: (id) => dispatch(loadComments(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
