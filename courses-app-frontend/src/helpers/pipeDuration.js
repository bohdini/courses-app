// a helper to format course duration

export const pipeDuration = (number) => {
	let hours = Math.floor(number / 60);
	let minutes = number % 60;
	if (hours < 10 && minutes < 10) return `0${hours}:0${minutes} hours`;
	if (hours < 10 && minutes >= 10) return `0${hours}:${minutes} hours`;
	if (hours >= 10 && minutes >= 10) return `${hours}:${minutes} hours`;
	if (hours >= 10 && minutes < 10) return `${hours}:0${minutes} hours`;
};
