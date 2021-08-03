import { GET_ALL_POSTS } from '../constants';
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
