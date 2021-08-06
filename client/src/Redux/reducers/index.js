import { GET_ALL_POSTS, GET_SINGLE_POST, GET_USER_ADMIN, GET_SINGLE_USER, SEARCH_BY_NAME, POST_USER} from '../constants';


const initialState = {
    postList : [],
    singlePost : {},
    singleUser: {},
    userAdmin: [],
    searchByName: [],
}


function rootReducer(state = initialState, action) {
    const { payload, type } = action;

    switch (type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                postList: payload
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
        case SEARCH_BY_NAME:
            return {
                ...state,
                searchByName: payload
            }
        default:
            return state;
    }
}

export default rootReducer;