import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';

import './Login.scss';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { requestToLogin } from '../../services';

import { userLogin } from '../../store/user/actionCreators';

// import { getUser } from '../../selectors';

// import { loginThunk } from '../../store/user/thunk';
import { getAllCoursesThunk } from '../../store/courses/thunk';
import { getAllAuthorsThunk } from '../../store/authors/thunk';
import { setRoleThunk } from '../../store/user/thunk';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState([]);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// const { isAuth } = useSelector(getUser);
	// const { token } = useSelector(getUser);

	const onSubmit = (e) => {
		e.preventDefault();

		const user = {
			email,
			password,
		};

		// dispatch(loginThunk(user));

		// if (isAuth) {
		// 	navigate('/courses');
		// }

		requestToLogin(user).then((result) => {
			// console.log(result);
			if (result.successful) {
				localStorage.setItem('token', result.result);
				localStorage.setItem('name', result.user.name);
				localStorage.setItem('email', result.user.email);
				const user = {
					token: result.result,
					name: result.user.name,
					email: result.user.email,
				};
				dispatch(userLogin(user));
				dispatch(setRoleThunk(result.result));
				dispatch(getAllCoursesThunk());
				dispatch(getAllAuthorsThunk());
				navigate('/courses');
			} else {
				if (result.errors) {
					setError(result.errors);
				} else {
					setError([result.result]);
				}
			}
		});
	};

	return (
		<form className='login-container' onSubmit={onSubmit}>
			<h2 className='login-header'>Login</h2>
			<div className='login-input-container'>
				<Input
					labelText='Email'
					placeholderText={'Enter email'}
					name='email'
					onChange={(e) => setEmail(e.target.value)}
					className={'login-input'}
				/>
				<Input
					labelText='Password'
					placeholderText={'Enter password'}
					name='password'
					onChange={(e) => setPassword(e.target.value)}
					className={'login-input'}
				/>
			</div>
			{error.length > 0 ? (
				<ul className='error-list'>
					{error.map((item) => (
						<li className='error'>{item}</li>
					))}
				</ul>
			) : null}
			<Button>Login</Button>
			<p>
				If you don't have an account you can{' '}
				<Link className='registration-redirect' to='/registration'>
					Register
				</Link>
			</p>
		</form>
	);
};

export default Login;
