import { GET_ALL_POSTS, GET_SINGLE_POST, GET_USER_ADMIN, GET_SINGLE_USER, SEARCH_BY_TITLE, CATEGORY_POST, CATEGORY_SPECEALTY, GET_FILTER_TYPE, GET_ALL_REVIEWS, POST_REVIEW, USER_LOGIN, GET_MP_ORDER_INFO, ADD_FAVORITE_POST, GET_FAVORITE_POST, REMOVE_FAVORITE_POST } from '../constants';
import axios from 'axios';


export const getAllPosts = () => {
    return (dispatch) => {
        axios.get(`/post`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: GET_ALL_POSTS, payload: data })
            })
    }
}

export const getAllCategory = () => {
    return (dispatch) => {
        axios.get(`/category`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: CATEGORY_POST, payload: data })
            })
    }
}

export const getAllSpecialty = () => {
    return (dispatch) => {
        axios.get(`/specialty`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: CATEGORY_SPECEALTY, payload: data })
            })
    }
}

export const getSinglePost = (id) => {
    return (dispatch) => {
        axios.get(`/post/${id}`)
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
        axios.get(`/user`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: GET_USER_ADMIN, payload: data })
            })
    }
}

export const getSingleUser = (id) => {
    return (dispatch) => {
        axios.get(`/user/${id}`)
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
        axios.get(`/post/search?keyword=${keyword}`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: SEARCH_BY_TITLE, payload: data })
            })
    }
}
export const searchByTitleClean = () => {
    return (dispatch) => {
        dispatch({ type: SEARCH_BY_TITLE, payload: [] })
    }
}
export const postUser = (payload) => {
    return (dispatch) => {
        axios.post("/user", payload)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: USER_LOGIN, payload: data })
            })
    };
}
export const UpdateUserData = (payload) => {
    return (dispatch) => {
        axios.put("/user", payload)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: USER_LOGIN, payload: data })
            })
    };
}

export const sendPost = (payload) => {
    return (dispatch) => {
        axios.post("/post", payload)
    };
}

export const sendCategory = (payload) => {
    return (dispatch) => {
        axios.post("/category", payload)
    };
}

export const sendSpecialty = (payload) => {
    return (dispatch) => {
        axios.post("/specialty", payload)
    };
}

export const getFilterType = (filterType) => {
    return (dispatch) => {
        dispatch({ type: GET_FILTER_TYPE, payload: filterType })
    }
}


export const getAllReviews = () => {
    return (dispatch) => {
        axios.get(`/review`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: GET_ALL_REVIEWS, payload: data })
            })
    }
}

export const postReview = (payload) => {
    return (dispatch) => {
        axios.post("/review", payload)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: POST_REVIEW, payload: data })
            })
    };
}

export const getReview = (id) => {
    return (dispatch) => {
        axios.get(`/review/${id}`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: "GET_REVIEW", payload: data })
            })
    }
}

export const updateReview = (payload, id) => {
    return (dispatch) => {
        axios.put(`/review/${id}`, payload)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: "UPDATE_REVIEW", payload: data })
            })
    }
}

export const deleteReview = (id) => {
    return (dispatch) => {
        axios.delete(`/review/${id}`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: "DELETE_REVIEW" })
            })
    }
}


export const getOrderTest = (payload) => {
    return (dispatch) => {
        dispatch({ type: "TEST_ORDER", payload })
    }
}
export const CheckoutPost = (data) => {
    return (dispatch) => {
        axios.post(`/order`, data)
            .then(r => r.data)
            .then(data => {
                // console.log(data, "ANDA O ME MATO")
                dispatch({ type: GET_MP_ORDER_INFO, payload: data })
            })
    }
}
export const clearCheckoutPost = () => {
    return (dispatch) => {
        dispatch({ type: GET_MP_ORDER_INFO, payload: {} })
    }
}

export const postQuestion = (payload) => {
    return (dispatch) => {
        axios.post("/question", payload)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: "POST_QUESTION", payload: data })
            })
    };
}


///////////////////////////////Favorite///////////////////////////////////////////

export const addFavoritePost = (favoritePost) => {
    return (dispatch) => {
        dispatch({ type: ADD_FAVORITE_POST, payload: favoritePost })
        let favoritos = window.localStorage.getItem('favs')
        let listFavorite = JSON.parse(favoritos)
        window.localStorage.setItem("favs", JSON.stringify([...listFavorite, favoritePost]))
    };
}
export const favoritePostList = () => {
    return (dispatch) => {
        let favoritos = window.localStorage.getItem('favs')
        let listFavorite = JSON.parse(favoritos)
        if (listFavorite?.length !== 0) {
            window.localStorage.setItem("favs", JSON.stringify(listFavorite))
        }
    };
}
export const getFavoritePostList = () => {
    return (dispatch) => {
        let favoritos = window.localStorage.getItem('favs')
        let listFavorite = JSON.parse(favoritos)
        if (!listFavorite) {
            dispatch({ type: GET_FAVORITE_POST, payload: [] })
        } else {
            // console.log(listFavorite)
            dispatch({ type: GET_FAVORITE_POST, payload: listFavorite })
        }
    };
}

export const deleteFavoritePost = (id) => {
    return (dispatch) => {
        dispatch({ type: REMOVE_FAVORITE_POST, payload: id })
        let favoritos = window.localStorage.getItem('favs')
        let listFavorite = JSON.parse(favoritos)
        if (listFavorite) {
            let deletefav = listFavorite.filter((e) => e.id !== id)
            window.localStorage.setItem("favs", JSON.stringify(deletefav))
        }

    };
}

// export const addFavTest = (favTest) => {
//     return (dispatch) => {
//     localStorage.setItem("favTest", favTest)
//     }
// }


