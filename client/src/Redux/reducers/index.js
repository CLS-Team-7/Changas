import { TEST_CONSTANT } from '../constants';


const initialState = {
    changeThis : [],
}


function rootReducer(state = initialState, action) {
    const { payload, type } = action;

    switch (type) {
        case TEST_CONSTANT:
            return {
                ...state,
                changeThis: payload
            };
        default:
            return state;
    }
}

export default rootReducer;