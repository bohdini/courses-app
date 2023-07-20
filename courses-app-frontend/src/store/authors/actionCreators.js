// Code with actions

import {
	AUTHORS_FETCHING,
	AUTHORS_FETCHED,
	AUTHORS_FETCHING_ERROR,
	ADD_AUTHOR,
} from './actionTypes';

export const authorsFetching = () => {
	return {
		type: AUTHORS_FETCHING,
	};
};

export const authorsFetched = (allAuthors) => {
	return {
		type: AUTHORS_FETCHED,
		payload: allAuthors,
	};
};

export const authorsFetchingError = () => {
	return {
		type: AUTHORS_FETCHING_ERROR,
	};
};

export const addAuthor = (newAuthor) => {
	return {
		type: ADD_AUTHOR,
		payload: newAuthor,
	};
};
