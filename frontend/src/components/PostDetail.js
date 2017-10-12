import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { loadPostById, loadCategories, loadComments, showCommentForm, hideCommentForm, createComment, editComment } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import Post from './Post';
import Comment from './Comment';
import AddComment from './AddComment';
import ReactModal from 'react-modal';
import CommentForm from './CommentForm';

class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.openCommentModal = this.openCommentModal.bind(this);
        this.closeCommentModal = this.closeCommentModal.bind(this);
        ReactModal.setAppElement('#root');
      }
    
      openCommentModal = () => {
        this.props.showCommentForm ()
      }
    
      closeCommentModal = () => {
        this.props.hideCommentForm()
      }

      onAddComment = ({body, author, id}) => {
        const {commentAdded, commentUpdated, match} = this.props
        const post_id = (match && match.params && match.params.post_id)
          ? match.params.post_id
          : null
        if (body && author && post_id) {
          if(id) {
            
          } else {
            this.props.createComment({ body: body, author: author, parentId : post_id })
            this.closeCommentModal()
          }
        }
      }

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
            comments, commentModal
        } = this.props;

        
            const postDeleted = (post && post.deleted)? <div>Post doesnt exists. checkout other <Link to={"/"}>posts</Link>.</div> : ''
            const commentsForPost = Object.values(comments).filter(comment => comment.parentId === post_id && !comment.deleted)
        
            const commentsCount = (commentsForPost && commentsForPost.length)? <span>&#40;{commentsForPost.length}&#41;</span> : ''

        return (
            <div className="container">
                <br />
                <div>
                    <Post post={post} commentsCount={commentsCount}/>
                </div>
                <section>
                <button type="submit" className="btn btn-primary pull-right" onClick={this.openCommentModal}><span className="icon add"></span><span>Add Comment</span></button>
                <ReactModal className='Modal' overlayClassName='Overlay' isOpen={commentModal && commentModal.isOpen} onRequestClose={this.closeCommentModal} contentLabel='Modal'>
                  {commentModal && commentModal.isOpen && <CommentForm submitBtnText={commentModal.comment? 'Update' : 'Publish'} onSubmit={this.onAddComment} comment={commentModal.comment} post={post} onClose={this.closeCommentModal}/>}
                </ReactModal>
              </section>
                <div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>User Comment</h3>
                        </div>
                    </div>
                    {comments.map((comment) => (
                        <div key={comment.id}>
                        <Comment comment={comment}  />
                        </div>
                ))}
                {postDeleted}
                </div>
                <br />
                {/* <AddComment parentId={post_id} /> */}
            </div >
        )
    }
}

function mapStateToProps(
    {
        post: { post },
        categories: { categories },
        comments: {comments},
        commentModal,
        comment: comment
    }, {
        match: { params: { post_id } }
    }) {
    return {
        post: post,
        categories: categories.map(category => category.name),
        comments: comments,
        commentModal : commentModal,
        comment: comment
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPostById: (id, category) => dispatch(loadPostById(id, category)),
        fetchCategories: () => dispatch(loadCategories()),
        fetchComments: (id) => dispatch(loadComments(id)),
        showCommentForm : () => dispatch(showCommentForm()),
        hideCommentForm : () => dispatch(hideCommentForm()),
        createComment: (comment) => dispatch(createComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
