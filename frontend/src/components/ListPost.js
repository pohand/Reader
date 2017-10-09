import React, { Component } from 'react';
import Post from './Post';
import * as PostAPI from '../api';
import { loadPosts, loadCategories } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'

class ListPost extends Component {

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchCatgories();
    }

    getCurrentCategoryRoute() {
        const { match } = this.props;
        if (match && match.params && match.params.category ) {
            return match.params.category;
        }
        return null;
    }

    validateCategory(categories, category) {
        return category === undefined ||
            categories.map(category => category.name)
                .includes(category);
    }

    render() {
        let title = "";
        let showingListPosts;
        let categoryRoute = this.getCurrentCategoryRoute();
        
        if (categoryRoute) {
            title = categoryRoute;
        }
        
        let isValidCategory = this.validateCategory(this.props.categories, title);
        if (title != "") {
            if (isValidCategory){
                const match = new RegExp(escapeRegExp(title), 'i')
                showingListPosts = this.props.posts.filter((post) => match.test(post.category))}        
                else {
                    showingListPosts = []
                }
            }
        else {
            showingListPosts = this.props.posts;
        }
        
        return (
          <div class="container">
          <div className="col-md-4">
            <div className="row">
              <div className="text-center">
                <div className="list-group list-group-horizontal">
                    <Link to="" key="\" className="list-group-item">
                        All
                    </Link>
                  {this.props.categories && this.props.categories.map((category) => (
                    <Link to={`${category.path}`} key={category.path} className="list-group-item">
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
          <ol >
                {showingListPosts.map((post) => (
                    <li key={post.id} >
                        <Post post={post} />
                    </li>
                ))}
            </ol>
          </div>
        </div>
            
        )
    }
}

function mapStateToProps({ posts, categories }) {
  return {
    categories: categories.categories,
    posts: posts.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(loadPosts()),
    fetchCatgories: () => dispatch(loadCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPost)
