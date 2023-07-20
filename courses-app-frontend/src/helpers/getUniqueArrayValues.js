function getDifference(array1, array2) {
	return array1.filter(
		(object1) => !array2.some((object2) => object1.id === object2.id)
	);
}

export const getUniqueArrayValues = (array1, array2) => {
	const difference = [
		...getDifference(array1, array2),
		...getDifference(array2, array1),
	];
	return difference;
};
