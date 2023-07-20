// Code with reducer for courses

import {
	COURSES_FETCHING,
	COURSES_FETCHED,
	COURSES_FETCHING_ERROR,
	DELETE_COURSE,
	ADD_COURSE,
	EDIT_COURSE,
} from './actionTypes';

const initialState = {
	courses: [],
	coursesLoadingStatus: 'idle',
};

export const coursesReducer = (state = initialState, action) => {
	switch (action.type) {
		case COURSES_FETCHING:
			return {
				...state,
				coursesLoadingStatus: 'loading',
			};
		case COURSES_FETCHED:
			return {
				...state,
				courses: action.payload,
				coursesLoadingStatus: 'idle',
			};
		case COURSES_FETCHING_ERROR:
			return {
				...state,
				coursesLoadingStatus: 'error',
			};
		case DELETE_COURSE:
			return {
				...state,
				courses: state.courses.filter((item) => item.id !== action.payload),
			};
		case ADD_COURSE:
			return {
				...state,
				courses: [...state.courses, action.payload],
			};
		case EDIT_COURSE: {
			const index = state.courses.findIndex(
				(elem) => elem.id === action.payload.id
			); //finding index of the item
			const newArray = [...state.courses]; //making a new array
			newArray[index] = action.payload; //changing value in the new array
			return {
				...state, //copying the orignal state
				courses: newArray, //reassingning todos to new array
			};
		}
		default:
			return state;
	}
};
