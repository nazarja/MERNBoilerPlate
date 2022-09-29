import * as actions from '../actions/actionTypes';

const defaultState = { isAuth: false };

export default function userReducer(state = defaultState, action) {
	switch (action.type) {
		case actions.SIGN_IN:
			return { ...state, ...action.payload, isAuth: true }
		case actions.SIGN_OUT:
			return { ...defaultState }
		default:
			return state;
	};
};