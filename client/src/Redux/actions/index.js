import { GET_ALL_POSTS, GET_SINGLE_POST, GET_USER_ADMIN, GET_SINGLE_USER, SEARCH_BY_TITLE, CATEGORY_POST, CATEGORY_SPECEALTY, GET_FILTER_TYPE, USER_LOGIN } from '../constants';
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

export const getAllCategory = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/category`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: CATEGORY_POST, payload: data })
            })
    }
}

export const getAllSpecialty = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/specialty`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: CATEGORY_SPECEALTY, payload: data })
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
        .then(r => r.data)
            .then(data => {
                dispatch({ type: USER_LOGIN, payload: data })
            })
    };
}
export const UpdateUserData = (payload) => {
    return (dispatch) => {
        axios.put("http://localhost:3001/user", payload)
        .then(r => r.data)
            .then(data => {
                dispatch({ type: USER_LOGIN, payload: data })
            })
    };
}

export const sendPost = (payload) => {
    return (dispatch) => {
        axios.post("http://localhost:3001/post", payload)
    };
}

export const sendCategory = (payload) => {
    return (dispatch) => {
        axios.post("http://localhost:3001/category", payload)
    };
}

export const sendSpecialty = (payload) => {
    return (dispatch) => {
        axios.post("http://localhost:3001/specialty", payload)
    };
}

export const getFilterType = (filterType) => {
    return (dispatch) => {
            dispatch({ type: GET_FILTER_TYPE, payload: filterType })
    }  
}