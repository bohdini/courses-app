import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Header.scss';

import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';

import { getUser } from '../../selectors';

import { logoutThunk } from '../../store/user/thunk';

const Header = () => {
	const { token, email } = useSelector(getUser);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onLogout = () => {
		dispatch(logoutThunk(token));
		navigate('login');
	};

	return (
		<div className='header-main'>
			<Logo />
			{token ? (
				<div className='header-right'>
					<p className='username'>{email}</p>
					<Button className='logout' onClick={() => onLogout()}>
						{' '}
						Logout{' '}
					</Button>
				</div>
			) : null}
		</div>
	);
};

export default Header;
