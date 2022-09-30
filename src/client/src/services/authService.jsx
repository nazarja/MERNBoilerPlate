import axios from 'axios';
import { store } from '../store';
import * as actions from '../store/actions/actionTypes';

export const signUp = async form => {
    return await axios.post('/auth/signup', form)
        .then(() => true)
        .catch(() => false);
};

export const signIn = async form => {
    return await axios.post('/auth/signin', form)
        .then(response => response)
        .catch(() => false);
};

export const signOut = async () => {
    await axios.post('/auth/signout')
        .catch(err => console.log(err));
};

export const refreshAuth = async () => {
    const response = await axios.post('/auth/refreshAuth');
    if (response.data.user) {
        store.dispatch({ type: actions.SIGN_IN, payload: response?.data?.user });
    }
    else store.dispatch({ type: actions.SIGN_OUT });
};