import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';

import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Courses from './components/Courses/Courses';
import CourseForm from './components/CourseForm/CourseForm';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Page404 from './pages/Page404';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';

import { getUser } from './selectors';

import { getAllCoursesThunk } from './store/courses/thunk';
import { getAllAuthorsThunk } from './store/authors/thunk';
import { setRoleThunk } from './store/user/thunk';

function App() {
	const { token } = useSelector(getUser);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// first load
	useEffect(() => {
		if (!token) {
			navigate('/login');
		} else {
			navigate('/courses');
			dispatch(setRoleThunk(token));
			dispatch(getAllCoursesThunk());
			dispatch(getAllAuthorsThunk());
		}
		// eslint-disable-next-line
	}, []);

	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='registration' element={<Registration />} />
				<Route path='login' element={<Login />} />
				<Route path='courses'>
					<Route index element={<Courses />} />
					<Route element={<PrivateRoute />}>
						<Route path='add' element={<CourseForm />} />
					</Route>
					<Route element={<PrivateRoute />}>
						<Route path='update/:courseId' element={<CourseForm />} />
					</Route>
					<Route path=':courseId' element={<CourseInfo />} />
				</Route>
				<Route path='*' element={<Page404 />} />
			</Routes>
		</div>
	);
}

export default App;
