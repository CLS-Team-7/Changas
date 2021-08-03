import { GET_ALL_POSTS } from '../constants';


const initialState = {
    postList : [],
}


function rootReducer(state = initialState, action) {
    const { payload, type } = action;

    switch (type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                postList: payload
            };
        default:
            return state;
    }
}

export default rootReducer;