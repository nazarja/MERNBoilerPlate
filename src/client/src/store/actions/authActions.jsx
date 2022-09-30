import * as actions from './actionTypes';

export const signIn = user => {
    return dispatch => {
        dispatch({
            type: actions.SIGN_IN,
            payload: user
        });
    };
};

export const signOut = () => {
    return dispatch => {
        dispatch({
            type: actions.SIGN_OUT,
        });
    };
};