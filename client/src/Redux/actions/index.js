import { GET_ALL_POSTS, GET_SINGLE_POST, GET_USER_ADMIN } from '../constants';
import axios from 'axios';


export const getAllPosts = () => {
    return (dispatch) => {
        axios.get(`https://6100000bbca46600171cf681.mockapi.io/Posts`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: GET_ALL_POSTS, payload: data })
            })
    }
}

export const getSinglePost = (id) => {
    return (dispatch) => {
        axios.get(`https://6100000bbca46600171cf681.mockapi.io/Posts/${id}`)
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
        axios.get(`https://6100000bbca46600171cf681.mockapi.io/User`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: GET_USER_ADMIN, payload: data })
            })
    }
}