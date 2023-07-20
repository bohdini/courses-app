import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getUser } from '../../selectors';

const PrivateRoute = () => {
	const { role } = useSelector(getUser); // determine if role user or admin
	// If role admin, return an outlet that will render child elements
	// If not, return element that will navigate to courses page
	return role === 'admin' ? <Outlet /> : <Navigate to='/courses' />;
};

export default PrivateRoute;
