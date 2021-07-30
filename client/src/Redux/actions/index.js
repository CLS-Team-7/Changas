import { TEST_CONSTANT } from '../constants';
import axios from 'axios';


export const getAll = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/test`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: TEST_CONSTANT, payload: data })
            })
    }
}
