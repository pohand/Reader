import * as PostAPI from '../api'

//POST
export const POST_LOAD = 'POST_LOAD'

//CATEGORY
export const CATEGORY_LOAD = 'CATEGORY_LOAD'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'

//POST
//get all posts
export const loadPosts = () => dispatch => (
    PostAPI.getAllPosts()
        .then(posts => dispatch({
            type: POST_LOAD,
            posts
        }))
);


//CATEGORY
export const loadCategories = () => dispatch => (
    PostAPI.getCategories()
    .then(categories => dispatch({
        type: CATEGORY_LOAD,
        categories
    }) )
);

export const loadPostsInCategory = (category) => dispatch => (
    PostAPI.getAllPostsInCategory(category)
        .then(posts => dispatch({
            type: SELECT_CATEGORY,
            category,
            posts
        }))
);