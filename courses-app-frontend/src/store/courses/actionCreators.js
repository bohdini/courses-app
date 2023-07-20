// Code with actions

import {
	COURSES_FETCHING,
	COURSES_FETCHED,
	COURSES_FETCHING_ERROR,
	DELETE_COURSE,
	ADD_COURSE,
	EDIT_COURSE,
} from './actionTypes';

export const coursesFetching = () => {
	return {
		type: COURSES_FETCHING,
	};
};

export const coursesFetched = (courses) => {
	return {
		type: COURSES_FETCHED,
		payload: courses,
	};
};

export const coursesFetchingError = () => {
	return {
		type: COURSES_FETCHING_ERROR,
	};
};

export const deleteCourse = (id) => {
	return {
		type: DELETE_COURSE,
		payload: id,
	};
};

export const addCourse = (newCourse) => {
	return {
		type: ADD_COURSE,
		payload: newCourse,
	};
};

export const editCourse = (updatedCourse) => {
	return {
		type: EDIT_COURSE,
		payload: updatedCourse,
	};
};
