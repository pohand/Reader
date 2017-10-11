import { combineReducers } from 'redux'

import {
    POSTS_LOAD,
    POST_SELECT,
    POST_CREATE,
    POST_EDIT,
    POST_DELETE,
    POST_UP_VOTE,
    POST_DOWN_VOTE,
    CATEGORY_LOAD,
} from '../actions'

//POSTS
const SORT_BY_UP = 'upVotes';
const SORT_BY_DOWN = 'downVotes';
const SORT_BY_LATEST = 'latest';

const initialPostsState = {
    sortBy: SORT_BY_LATEST,
    posts: []
}

const sortPostsBy = (posts, option) => {
    switch (option) {
        case SORT_BY_UP:
            return [...posts].sort((a, b) => {
                return b.voteScore - a.voteScore;
            });
        case SORT_BY_DOWN:
            return [...posts].sort((a, b) => {
                return a.voteScore - b.voteScore;
            });
        case SORT_BY_LATEST:
            return [...posts].sort((a, b) => {
                return b.timestamp - a.timestamp;
            });
        default:
            return posts;
    }
}

export function posts(state = initialPostsState, action) {
    const { posts, post, type } = action
    switch (type) {
        case POSTS_LOAD:
            return {
                sortBy: SORT_BY_UP,
                posts: sortPostsBy(posts, SORT_BY_UP)
            };
        default:
            return state;
    }
}

//POST
function post(state = initialPostDetailState, action) {
    switch (action.type) {
        case POST_SELECT:
        case POST_EDIT:
        case POST_DOWN_VOTE:
        case POST_UP_VOTE:
            return {
                post: action.post
            };
        case POST_DELETE:
            return initialPostDetailState;
        default:
            return state;
    }
}

const initialPostDetailState = {
    post : {}
}
//CATEGORY
const initialCategoriesState = {
    currentCategory: null,
    categories: []
}

export function categories(state = initialCategoriesState, action) {
    const { categories, category, type } = action
    switch (type) {
        case CATEGORY_LOAD:
        return {            
            currentCategory: category,
            categories,
        };
        default:
            return state;
    }
}

export default combineReducers({
    posts, 
    categories,
    post
})