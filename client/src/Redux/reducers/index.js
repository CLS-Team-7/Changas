import { GET_ALL_POSTS, GET_SINGLE_POST, GET_USER_ADMIN, GET_SINGLE_USER } from '../constants';


const initialState = {
    postList : [],
    singlePost : {},
    singleUser: {},
    userAdmin: [],
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
        default:
            return state;
    }
}

export default rootReducer;