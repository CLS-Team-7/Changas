import { GET_ALL_POSTS, GET_SINGLE_POST } from '../constants';
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