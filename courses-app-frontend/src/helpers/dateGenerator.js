// a helper to get current date in the correct format

export const dateGenerator = () => {
	const date = new Date();

	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	// return `${day}/${month}/${year}`;
	return day + '/' + month + '/' + year;
};
