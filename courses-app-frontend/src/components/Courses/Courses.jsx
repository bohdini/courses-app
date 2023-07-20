import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Courses.scss';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import Spinner from '../../common/Spinner/Spinner';

import { pipeDuration } from '../../helpers/pipeDuration';
import { findAuthors } from '../../helpers/findAuthors';

import { getCourses, getAuthors, getUser } from '../../selectors';

const Courses = () => {
	const [search, setSearch] = useState('');

	const getSearch = (data) => {
		setSearch(data);
	};

	const { courses, coursesLoadingStatus } = useSelector(getCourses);
	const { allAuthors, authorsLoadingStatus } = useSelector(getAuthors);
	const { role } = useSelector(getUser);
	const navigate = useNavigate();

	const onAddNewCourse = () => {
		navigate('add');
	};

	const CoursesList =
		courses.length < 1 ? (
			<div className='no-courses'>No courses yet</div>
		) : (
			courses
				.filter((elem) => {
					return search.toLowerCase() === ''
						? elem
						: elem.title.toLowerCase().includes(search) ||
								elem.id.toLowerCase().includes(search);
				})
				.map((item) => {
					return (
						<CourseCard
							key={item.id}
							title={item.title}
							description={item.description}
							authors={
								authorsLoadingStatus === 'loading' ? (
									<Spinner />
								) : (
									findAuthors(item.authors, allAuthors)
								)
							}
							duration={pipeDuration(item.duration)}
							creationDate={item.creationDate}
							id={item.id}
						/>
					);
				})
		);

	return (
		<div className='courses-container'>
			<div className='courses-tools'>
				<SearchBar onSubmit={getSearch} />
				{role === 'admin' ? (
					<Button onClick={onAddNewCourse}>Add New Course</Button>
				) : null}
			</div>
			<ul className='courses-list'>
				{coursesLoadingStatus === 'loading' ? <Spinner /> : CoursesList}
			</ul>
		</div>
	);
};

export default Courses;
