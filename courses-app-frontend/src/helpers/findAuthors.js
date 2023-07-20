// a helper to find authors

export const findAuthors = (arrayId, arrayAuthors) => {
	if (arrayAuthors.length < 1 || arrayId.length < 1) {
		return 'No authors';
	}
	const authors = arrayId.map((item) => {
		const author = arrayAuthors.find((elem) => elem.id === item);
		return author.name;
	});

	return authors.join(', ');
};
