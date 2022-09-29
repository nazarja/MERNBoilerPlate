import * as actions from '../actions/actionTypes';

const defaultState = { isAuth: null };

export default function userReducer(state = defaultState, action) {
	switch (action.type) {
		case actions.SIGN_IN:
			return { ...state, ...action.payload, isAuth: true }
		case actions.SIGN_OUT:
			return { isAuth: false }
		default:
			return state;
	};
};