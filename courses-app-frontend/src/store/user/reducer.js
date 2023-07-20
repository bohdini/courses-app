// Code with reducer for user

import { LOGIN, LOGOUT, SET_ROLE } from './actionTypes';

const initialState = {
	isAuth: localStorage.getItem('token') ? true : false, // default value - false. After success login - true
	name: localStorage.getItem('name') || '', // default value - empty string. After success login - name of user
	email: localStorage.getItem('email') || '', // default value - empty string. After success login - email of user
	token: localStorage.getItem('token') || '', // default value - empty string or token value from localStorage.
	role: '',
	// isAuth: false, // default value - false. After success login - true
	// name: '', // default value - empty string. After success login - name of user
	// email: '', // default value - empty string. After success login - email of user
	// token: '', // default value - empty string or token value from localStorage.
	// role: '',
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				isAuth: true,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
			};
		case LOGOUT:
			return {
				...state,
				isAuth: false,
				name: '',
				email: '',
				token: '',
				role: '',
			};
		case SET_ROLE:
			return {
				...state,
				role: action.payload,
			};
		default:
			return state;
	}
};
