import React, { Component } from 'react';
import { createComment, editComment } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'

class AddComment extends Component {
    state = {
        author: '1111',
        body: '2222'
    }

    render() {
        const {
            comment, parentId,
            createComment

        } = this.props;
        return (
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <div className="form-group">
                            <label htmlFor="usr">Name:</label>
                            <input type="text" className="form-control" id="usr" value={this.state.author} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">Comment:</label>
                            <textarea className="form-control" rows="5" id="comment" value={this.state.body} ></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary pull-right" onClick={
                                () => createComment({ body: this.state.body, author: this.state.author, parentId })
                            } >Submit</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

function mapStateToProps({ comment }) {
    return {
        comment: comment
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createComment: (comment) => dispatch(createComment(comment))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddComment)
