import { GET_ALL_POSTS, GET_SINGLE_POST, GET_USER_ADMIN, GET_SINGLE_USER, SEARCH_BY_TITLE, CATEGORY_POST, CATEGORY_SPECEALTY, GET_FILTER_TYPE, USER_LOGIN, GET_ALL_REVIEWS, POST_REVIEW, GET_MP_ORDER_INFO, GET_REVIEW, ADD_FAVORITE_POST, GET_FAVORITE_POST, REMOVE_FAVORITE_POST, GET_JOB_PETITIONS, GET_JOB_OFFERS } from '../constants';

const initialState = {
    postList: [],
    userLogin: [],
    singlePost: {},
    singleUser: {},
    userAdmin: [],
    searchByTitle: [],
    categoryPost: [],
    specialtyCategory: [],
    filterType: 'All',
    testorder: {},
    allReview: [],
    singleReview: {},
    orderInfo: {},
    favoritePost: [],
    allQuestions: [],
    singleQuestion: {},
    singleAnswer: {},
    petitionPost: [],
    offerPost: [],
    // hola

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
        case USER_LOGIN:
            return {
                ...state,
                userLogin: payload
            }
        case SEARCH_BY_TITLE:
            return {
                ...state,
                searchByTitle: payload
            }
        case GET_FILTER_TYPE:
            return {
                ...state,
                filterType: payload
            }
        case "TEST_ORDER":
            return {
                ...state,
                testorder: payload
            }
        case GET_ALL_REVIEWS:
            return {
                ...state,
                allReview: payload
            };
        case POST_REVIEW:
            return {
                ...state,
                allReview: payload
            };
        case GET_MP_ORDER_INFO:
            return {
                ...state,
                orderInfo: payload
            };
        case GET_REVIEW:
            return {
                ...state,
                singleReview: payload
            };
        case "UPDATE_REVIEW":
            return {
                ...state,
                singleReview: payload
            };
        case "DELETE_REVIEW":
            return {
                ...state
            }
        case GET_FAVORITE_POST:
            return {
                ...state,
                favoritePost: payload
            }
        case ADD_FAVORITE_POST:
            return {
                ...state,
                favoritePost: [...state.favoritePost, action.payload]
            }
        case REMOVE_FAVORITE_POST:
            return {
                ...state,
                favoritePost: state.favoritePost.filter(e => e.id !== payload)
            }

        case "POST_QUESTION":
            return {
                ...state,
                allQuestions: payload
            };
        case "GET_ALL_QUESTIONS":
            return {
                ...state,
                allQuestions: payload
            };
        case "POST_ANSWER":
            return {
                ...state,
                singleAnswer: payload
            };


        case GET_JOB_PETITIONS:
            return {
                ...state,
                petitionPost: payload
            }
        case GET_JOB_OFFERS:
            return {
                ...state,
                offerPost: payload
            }

        default:
            return state;
    }
}

export default rootReducer;