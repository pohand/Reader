import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { loadPostById, loadCategories } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'

class PostDetail extends Component {
    componentDidMount() {
        const {
            match: { params: { category, post_id } },
            fetchPostById,
            fetchCategories
        } = this.props;
        fetchCategories();
        fetchPostById(post_id, category);
    }

    render() {
        const {
            match: { params: { category, post_id } },
            post, categories,
            openCommentDialog
        } = this.props;

        return (
            <div className="container">
                <div className="span8">
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
                
                <div className="row">
                    <div className="comment-box">
                        <h4 className="title">John Doe</h4>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <label for="usr">Name:</label>
                                <input type="text" className="form-control" id="usr" />
                            </div>
                            <div className="form-group">
                                <label for="comment">Comment:</label>
                                <textarea className="form-control" rows="5" id="comment"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary pull-right">Submit</button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        )
    }
}

function mapStateToProps(
    {
        post: { post },
        categories: { categories },
        //comments
    }, {
        match: { params: { post_id } }
    }) {
    return {
        post: post,
        categories: categories.map(category => category.name),
        //comments: comments[post_id]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPostById: (id, category) => dispatch(loadPostById(id, category)),
        fetchCategories: () => dispatch(loadCategories()),
        //openCommentDialog: () => dispatch(openCommentDialog())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
