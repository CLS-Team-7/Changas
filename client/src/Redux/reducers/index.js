import { GET_ALL_POSTS, GET_SINGLE_POST, GET_USER_ADMIN, GET_SINGLE_USER, SEARCH_BY_TITLE, CATEGORY_POST, CATEGORY_SPECEALTY, GET_FILTER_TYPE, GET_FAVORITE_POST } from '../constants';


const initialState = {
    postList : [],
    singlePost : {},
    singleUser: {},
    userAdmin: [],
    searchByTitle: [],
    categoryPost: [],
    specialtyCategory: [],
    filterType: 'All',
    favoritePost: [],
}


function rootReducer(state = initialState, action) {
    const { payload, type } = action;

    switch (type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                postList: payload
            };
        case CATEGORY_POST:
            return {
                ...state,
                categoryPost: payload
            };
        case CATEGORY_SPECEALTY:
            return {
                ...state,
                specialtyCategory: payload
            };
        case GET_SINGLE_POST:
            return {
                ...state,
                singlePost: payload
            }
        case GET_USER_ADMIN:
            return {
                ...state,
                userAdmin: payload
            }
        case GET_SINGLE_USER:
            return {
                ...state,
                singleUser: payload
            }
        case SEARCH_BY_TITLE:
            return {
                ...state,
                searchByTitle: payload
            }
        case GET_FILTER_TYPE:
            return{
                ...state,
                filterType: payload
            }
        case GET_FAVORITE_POST:
            return{
                ...state,
                favoritePost: payload
            }
        default:
            return state;
    }
}

export default rootReducer;