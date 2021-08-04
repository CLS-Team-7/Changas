import { GET_ALL_POSTS, GET_SINGLE_POST } from '../constants';


const initialState = {
    postList : [],
    singlePost : {},
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
        default:
            return state;
    }
}

export default rootReducer;