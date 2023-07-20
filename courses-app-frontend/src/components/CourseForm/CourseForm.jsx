import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './CourseForm.scss';

import Button from '../../common/Button/Button';

// import { getUniqueArrayValues } from '../../helpers/getUniqueArrayValues';

import { getAuthors, getCourses, getUser } from '../../selectors';

import { addAuthorThunk } from '../../store/authors/thunk';

import { addCourseThunk, updateCourseThunk } from '../../store/courses/thunk';
import CreateDuration from './components/CreateDuration/CreateDuration';
import Authors from './components/Authors/Authors';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import CreateTitle from './components/CreateTitle/CreateTitle';
import CreateDescription from './components/CreateDescription/CreateDescription';

const CREATE_COURSE = 'Create course';
const UPDATE_COURSE = 'Update course';

const CourseForm = () => {
	const [buttonText, setButtonText] = useState(CREATE_COURSE);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [newAuthorName, setNewAuthorName] = useState('');
	const [duration, setDuration] = useState(0);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const { courses } = useSelector(getCourses);
	const { allAuthors } = useSelector(getAuthors);
	const { token } = useSelector(getUser);

	const { courseId } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		if (courseId) {
			setButtonText(UPDATE_COURSE);
			const courseToEdit = courses.find((elem) => elem.id === courseId);
			setTitle(courseToEdit.title);
			setDescription(courseToEdit.description);
			setDuration(courseToEdit.duration);
			setCourseAuthors(
				courseAuthors.concat(
					courseToEdit.authors.reduce((acc, elem) => {
						acc.push(allAuthors.find((item) => elem === item.id));
						return acc;
					}, [])
				)
			);
		}
		// eslint-disable-next-line
	}, []);

	const onFormSubmit = (e) => {
		e.preventDefault();

		if (
			title === '' ||
			duration === 0 ||
			description.length < 3 ||
			courseAuthors.length === 0
		) {
			alert('Please fill in all fields!');
			return;
		}

		if (buttonText === UPDATE_COURSE) {
			const updatedCourse = {
				title: String(title),
				description: String(description),
				duration: Number(duration),
				authors: courseAuthors.map((item) => {
					return String(item.id);
				}),
			};
			dispatch(updateCourseThunk(token, courseId, updatedCourse));
			navigate('/courses');
		} else {
			const newCourse = {
				title: String(title),
				description: String(description),
				duration: Number(duration),
				authors: courseAuthors.map((item) => {
					return String(item.id);
				}),
			};
			dispatch(addCourseThunk(token, newCourse));
			navigate('/courses');
		}
	};

	const onBackToCourses = () => {
		navigate('/courses');
	};

	const onNewAuthorCreate = (authorName) => {
		if (authorName.length < 2) {
			alert('Author name should have at least 2 characters!');
			return;
		}
		dispatch(addAuthorThunk(token, authorName));
	};

	const onAddAuthorToCourse = (id) => {
		const index = allAuthors.findIndex((elem) => elem.id === id);
		setCourseAuthors(courseAuthors.concat(allAuthors[index]));
	};

	const onDeleteAuthorFromCourse = (id) => {
		const index = courseAuthors.findIndex((elem) => elem.id === id);
		setCourseAuthors(courseAuthors.filter((_, i) => i !== index));
	};

	const AuthorsList =
		allAuthors.length === 0
			? 'Author list empty'
			: allAuthors
					.filter((author1) => {
						// getting authors that are not in course authors list already
						return !courseAuthors.some((author2) => {
							return author1.id === author2.id;
						});
					})
					//   getUniqueArrayValues(allAuthors, courseAuthors)
					.map((item, index) => {
						return (
							<li className='list-item' key={index}>
								<p>{item.name}</p>
								<Button
									className='add-author-button'
									onClick={() => onAddAuthorToCourse(item.id)}
									type='button'
								>
									Add author
								</Button>
							</li>
						);
					});

	const CourseAuthors =
		courseAuthors.length === 0
			? 'Author list empty'
			: courseAuthors.map((item, index) => {
					return (
						<li className='list-item' key={index}>
							<p>{item.name}</p>
							<Button
								className='add-author-button'
								onClick={() => onDeleteAuthorFromCourse(item.id)}
								type='button'
							>
								Delete author
							</Button>
						</li>
					);
			  });

	return (
		<form className='create-course-container' onSubmit={onFormSubmit}>
			<CreateTitle
				title={title}
				setTitle={setTitle}
				onBackToCourses={onBackToCourses}
				buttonText={buttonText}
			/>

			<CreateDescription
				description={description}
				setDescription={setDescription}
			/>

			<div className='course-author'>
				<div className='author-left-container'>
					<CreateAuthor
						setNewAuthorName={setNewAuthorName}
						onNewAuthorCreate={onNewAuthorCreate}
						newAuthorName={newAuthorName}
					/>

					<CreateDuration duration={duration} setDuration={setDuration} />
				</div>

				<div className='author-right-container'>
					<Authors AuthorsList={AuthorsList} CourseAuthors={CourseAuthors} />
				</div>
			</div>
		</form>
	);
};

export default CourseForm;
