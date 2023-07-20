// import { useNavigate } from 'react-router-dom';

import {
	setRole,
	userLogout,
	// userLogin
} from './actionCreators';

import {
	fetchUserInfo,
	// requestToLogin,
	requestToLogout,
	// requestToRegister,
} from '../../services';

export const setRoleThunk = (token) => (dispatch) => {
	//getting info about user role
	fetchUserInfo(token).then((result) => {
		// console.log(result);
		dispatch(setRole(result.result.role));
	});
};

export const logoutThunk = (token) => (dispatch) => {
	// logout (delete method) request
	requestToLogout(token).then((data) => {
		// console.log(data);
		if (data === 'OK') {
			localStorage.clear();
			dispatch(userLogout());
		}
	});
};

// export const loginThunk = (user) => (dispatch) => {
// 	requestToLogin(user).then((result) => {
// 		// console.log(result);
// 		if (result.successful) {
// 			localStorage.setItem('token', result.result);
// 			localStorage.setItem('name', result.user.name);
// 			localStorage.setItem('email', result.user.email);
// 			const user = {
// 				token: result.result,
// 				name: result.user.name,
// 				email: result.user.email,
// 			};
// 			dispatch(userLogin(user));
// 		}
// 		// else {
// 		// 	if (result.errors) {
// 		// 		setError(result.errors);
// 		// 	} else {
// 		// 		setError([result.result]);
// 		// 	}
// 		// }
// 	});
// };

// export const registerThunk = (newUser) => (dispatch) => {};
