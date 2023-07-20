// Code with reducer for courses

import {
	AUTHORS_FETCHING,
	AUTHORS_FETCHED,
	AUTHORS_FETCHING_ERROR,
	ADD_AUTHOR,
} from './actionTypes';

const initialState = {
	allAuthors: [],
	// courseAuthors: [],
	authorsLoadingStatus: 'idle',
};

export const allAuthorsReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTHORS_FETCHING:
			return {
				...state,
				authorsLoadingStatus: 'loading',
			};
		case AUTHORS_FETCHED:
			return {
				...state,
				allAuthors: action.payload,
				authorsLoadingStatus: 'idle',
			};
		case AUTHORS_FETCHING_ERROR:
			return {
				...state,
				authorsLoadingStatus: 'error',
			};
		case ADD_AUTHOR:
			return {
				...state,
				allAuthors: [...state.allAuthors, action.payload],
			};
		default:
			return state;
	}
};
