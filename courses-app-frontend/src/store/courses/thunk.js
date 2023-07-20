import {
	coursesFetching,
	coursesFetched,
	coursesFetchingError,
	deleteCourse,
	editCourse,
	addCourse,
} from './actionCreators';

import {
	fetchAllCourses,
	requestToDeleteCourse,
	requestToUpdateCourse,
	requestToAddCourse,
} from '../../services';

export const getAllCoursesThunk = () => (dispatch) => {
	//getting all courses
	dispatch(coursesFetching());
	fetchAllCourses()
		.then((result) => {
			// console.log(result);
			if (result.successful) {
				// setTimeout(() => {
				dispatch(coursesFetched(result.result));
				// }, 500);
			}
		})
		.catch(() => dispatch(coursesFetchingError()));
};

export const deleteCourseThunk = (token, id) => (dispatch) => {
	//deleting course by id
	requestToDeleteCourse(token, id).then((data) => {
		console.log(data);
		if (data.successful) {
			dispatch(deleteCourse(id));
			alert(data.result);
		}
	});
};

export const updateCourseThunk =
	(token, courseId, updatedCourse) => (dispatch) => {
		requestToUpdateCourse(token, courseId, updatedCourse).then((data) => {
			console.log(data);
			dispatch(editCourse(data.result));
		});
	};
export const addCourseThunk = (token, newCourse) => (dispatch) => {
	requestToAddCourse(token, newCourse).then((data) => {
		console.log(data);
		dispatch(addCourse(data.result));
	});
};
