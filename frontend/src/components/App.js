import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ListPost from './ListPost';
import * as PostAPI from '../api';
import { loadPosts, loadCategories } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class App extends Component {

  // state = {
  //   categories: []
  // }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchCatgories();
    // PostAPI.getCategories().then((categories) => {
    //   this.setState({ categories })
    // }
    // )
  }

  render() {
    return (
      <div className="App">
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
            <ListPost posts={this.props.posts} />
          </div>
        </div>
      </div>
    );
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
)(App)
