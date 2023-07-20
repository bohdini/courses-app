const PORT = 5005;

export const fetchAllAuthors = async () => {
	const response = await fetch(`http://localhost:${PORT}/authors/all`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const result = await response.json();
	// console.log(result);
	return result;
};

export const fetchAllCourses = async () => {
	const response = await fetch(`http://localhost:${PORT}/courses/all`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const result = await response.json();
	// console.log(result);
	return result;
};

export const fetchUserInfo = async (token) => {
	const response = await fetch(`http://localhost:${PORT}/users/me`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json', authorization: token },
	});
	// console.log(response);
	const result = await response.json();
	return result;
};

export const requestToDeleteCourse = async (token, id) => {
	const response = await fetch(`http://localhost:${PORT}/courses/${id}`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json', authorization: token },
	});
	// console.log(response);
	const result = await response.json();
	return result;
};

export const requestToLogout = async (token) => {
	const response = await fetch(`http://localhost:${PORT}/logout`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json', authorization: token },
	});
	// const result = await response.json();
	return response.statusText;
};

export const requestToAddAuthor = async (token, newAuthor) => {
	const response = await fetch(`http://localhost:${PORT}/authors/add`, {
		method: 'POST',
		body: JSON.stringify(newAuthor),
		headers: { 'Content-Type': 'application/json', authorization: token },
	});

	const result = await response.json();
	// console.log(result);
	return result;
};

export const requestToUpdateCourse = async (token, id, updatedCourse) => {
	const response = await fetch(`http://localhost:${PORT}/courses/${id}`, {
		method: 'PUT',
		body: JSON.stringify(updatedCourse),
		headers: { 'Content-Type': 'application/json', authorization: token },
	});
	console.log(response);
	const result = await response.json();

	return result;
};

export const requestToAddCourse = async (token, newCourse) => {
	const response = await fetch(`http://localhost:${PORT}/courses/add`, {
		method: 'POST',
		body: JSON.stringify(newCourse),
		headers: { 'Content-Type': 'application/json', authorization: token },
	});
	console.log(response);
	const result = await response.json();

	return result;
};

/// need to add to thunk below func

export const requestToRegister = async (user) => {
	const response = await fetch(`http://localhost:${PORT}/register`, {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const result = await response.json();
	// console.log(result);
	return result;
};

export const requestToLogin = async (user) => {
	const response = await fetch(`http://localhost:${PORT}/login`, {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const result = await response.json();
	// console.log(result);
	return result;
};
