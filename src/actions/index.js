import axios from 'axios';
import { FETCH_USER } from './action_types';

const fetchUser = () => {
     return dispatch => {
    axios
     .get('/api/current_user')
     .then(res => {
         dispatch({type : FETCH_USER,
         payload : res});
     })
    }
}