import {
	authorsFetching,
	authorsFetched,
	authorsFetchingError,
} from './actionCreators';

import { fetchAllAuthors, requestToAddAuthor } from '../../services';

import { addAuthor } from './actionCreators';

export const getAllAuthorsThunk = () => (dispatch) => {
	// getting all authors
	dispatch(authorsFetching());
	fetchAllAuthors()
		.then((result) => {
			if (result.successful) {
				// setTimeout(() => {
				dispatch(authorsFetched(result.result));
				// }, 1000);
			}
		})
		.catch(() => dispatch(authorsFetchingError()));
};

export const addAuthorThunk = (token, authorName) => (dispatch) => {
	const newAuthor = { name: authorName };
	requestToAddAuthor(token, newAuthor).then((data) => {
		console.log(data);
		dispatch(addAuthor(data.result));
	});
};
