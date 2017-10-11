import * as PostAPI from '../api'

//POST
export const POSTS_LOAD = 'POSTS_LOAD'
export const POST_SELECT = 'POST_SELECT'
export const POST_CREATE = 'POST_CREATE'
export const POST_EDIT = 'POST_EDIT'
export const POST_DELETE = 'POST_DELETE'
export const POST_UP_VOTE = 'POST_UP_VOTE'
export const POST_DOWN_VOTE = 'POST_DOWN_VOTE'
export const POST_VOTE = 'POST_VOTE'

//CATEGORY
export const CATEGORY_LOAD = 'CATEGORY_LOAD'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'

//POST
//get all posts
export const loadPosts = () => dispatch => (
    PostAPI.getAllPosts()
        .then(posts => dispatch({
            type: POSTS_LOAD,
            posts
        }))
);

export const loadPostById = (postId, category) => dispatch => (
    PostAPI.getPostById(postId)
        .then(post => dispatch({
            type: POST_SELECT,
            post
        }))
)

export function createPost(post) {
    return { type: POST_CREATE, post }
}

export function editPost(post) {
    return { type: POST_EDIT, post }
}

export const voteOnPost = (postId, isUpVote) => dispatch => {
    return PostAPI.voteOnPost(postId, isUpVote).then((post) => {
        dispatch({ type: POST_VOTE, post })
    })
}

export const deletePost = (postId) => dispatch => {
    return PostAPI.deletePost(postId).then((post) => {
        dispatch({ type: POST_DELETE, post })
    })
}

//CATEGORY
export const loadCategories = () => dispatch => (
    PostAPI.getCategories()
        .then(categories => dispatch({
            type: CATEGORY_LOAD,
            categories
        }))
);

export const loadPostsInCategory = (category) => dispatch => (
    PostAPI.getAllPostsInCategory(category)
        .then(posts => dispatch({
            type: SELECT_CATEGORY,
            category,
            posts
        }))
);