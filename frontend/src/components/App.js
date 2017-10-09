import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ListPost from './ListPost';
import PostDetail from './PostDetail';
import * as PostAPI from '../api';
import { loadPosts, loadCategories } from '../actions';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom'

// class App extends Component {

//   // state = {
//   //   categories: []
//   // }

//   componentDidMount() {
//     this.props.fetchPosts();
//     this.props.fetchCatgories();
//     // PostAPI.getCategories().then((categories) => {
//     //   this.setState({ categories })
//     // }
//     // )
//   }

//   render() {
//     return (
//       <div className="App">
//           <div class="container">
//           <div className="col-md-4">
//             <div className="row">
//               <div className="text-center">
//                 <div className="list-group list-group-horizontal">
//                 <Link to="" key="\" className="list-group-item">
//                       All
//                     </Link>
//                   {this.props.categories && this.props.categories.map((category) => (
//                     <Link to={`${category.path}`} key={category.path} className="list-group-item">
//                       {category.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-8">
//             <ListPost posts={this.props.posts} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// function mapStateToProps({ posts, categories }) {
//   return {
//     categories: categories.categories,
//     posts: posts.posts,
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchPosts: () => dispatch(loadPosts()),
//     fetchCatgories: () => dispatch(loadCategories())
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)

class App extends Component {

    state = {
      posts: []
  }

    componentDidMount() {
    PostAPI.getAllPosts().then((posts) => {
      this.setState({ posts })
    }
    )
  }
  render() {
      return (
          <div>
              <Route exact path="/" render={() => (
                  <div>
                      <ListPost posts={this.state.posts }/>
                  </div>
              )}/>
              <Route exact path="/:category" component={ListPost}/>
              <Route exact path="/:category/:post_id" component={PostDetail}/>
          </div>
      );
  }
}

export default (App);