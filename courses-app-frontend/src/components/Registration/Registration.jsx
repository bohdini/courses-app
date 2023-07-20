import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Registration.scss';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { requestToRegister } from '../../services';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState([]);
	const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();

		const newUser = {
			name,
			password,
			email,
			role: 'user',
		};

		requestToRegister(newUser).then((result) => {
			// console.log(result);
			if (result.successful) {
				navigate('/login');
			} else {
				setError(result.errors);
			}
		});
	};

	return (
		<form className='registration-container' onSubmit={onSubmit}>
			<h2 className='registration-header'>Registration</h2>
			<div className='registration-input-container'>
				<Input
					labelText='Name'
					placeholderText={'Enter name'}
					name='name'
					onChange={(e) => setName(e.target.value)}
					className={'register-input'}
				/>
				<Input
					labelText='Email'
					placeholderText={'Enter email'}
					name='email'
					onChange={(e) => setEmail(e.target.value)}
					className={'register-input'}
				/>
				<Input
					labelText='Password'
					placeholderText={'Enter password'}
					name='password'
					onChange={(e) => setPassword(e.target.value)}
					className={'register-input'}
				/>
			</div>
			{error.length > 0 ? (
				<ul className='error-list'>
					{error.map((item) => (
						<li className='error'>{item}</li>
					))}
				</ul>
			) : null}
			<Button type='submit'>Register</Button>
			<p>
				If you have an account you can{' '}
				<Link className='login-redirect' to='/login'>
					Login
				</Link>
			</p>
		</form>
	);
};

export default Registration;
