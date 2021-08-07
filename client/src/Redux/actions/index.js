import { GET_ALL_POSTS, GET_SINGLE_POST, GET_USER_ADMIN, GET_SINGLE_USER, SEARCH_BY_TITLE, POST_USER } from '../constants';
import axios from 'axios';


export const getAllPosts = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/post`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: GET_ALL_POSTS, payload: data })
            })
    }
}

export const getSinglePost = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/post/${id}`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: GET_SINGLE_POST, payload: data })
            })
    }
}

export const clearSinglePost = () => {
    return (dispatch) => {
                dispatch({ type: GET_SINGLE_POST, payload: [] })
            }
    }

export const getUserAdmin = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/user`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: GET_USER_ADMIN, payload: data })
            })
    }
}

export const getSingleUser = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/user/${id}`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: GET_SINGLE_USER, payload: data })
            })
    }
}
export const clearSingleUser = () => {
    return (dispatch) => {
                dispatch({ type: GET_SINGLE_USER, payload: [] })
            }
    }

export const searchByTitle = (keyword) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/post/search?keyword=${keyword}`)
        .then(r => r.data)
        .then(data => {
            dispatch({type: SEARCH_BY_TITLE, payload: data})
        })
    }
}
export const searchByTitleClean = () => {
    return (dispatch) => {
            dispatch({type: SEARCH_BY_TITLE, payload: []})
    }
}
export const postUser = (payload) => {
    return (dispatch) => {
        axios.post("http://localhost:3001/user", payload)
    };
}

export const sendPost = (payload) => {
    return (dispatch) => {
        axios.post("https://6100000bbca46600171cf681.mockapi.io/Posts", payload)
    };
}