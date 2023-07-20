// Code with actions

import { LOGIN, LOGOUT, SET_ROLE } from './actionTypes';

export const userLogin = (user) => {
	return {
		type: LOGIN,
		payload: user,
	};
};

export const userLogout = () => {
	return {
		type: LOGOUT,
	};
};

export const setRole = (role) => {
	return {
		type: SET_ROLE,
		payload: role,
	};
};
