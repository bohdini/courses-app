import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import PropTypes from 'prop-types';

import './CourseInfo.scss';

import Button from '../../common/Button/Button';

import { pipeDuration } from '../../helpers/pipeDuration';
import { findAuthors } from '../../helpers/findAuthors';
import { getCourses, getAuthors } from '../../selectors';

const CourseInfo = () => {
	const { courses } = useSelector(getCourses);
	const { allAuthors } = useSelector(getAuthors);

	const navigate = useNavigate();

	const { courseId } = useParams();

	const course = courses.find((elem) => elem.id === courseId);
	const { id, title, description, duration, authors, creationDate } = course;

	const onBackToCourses = () => {
		navigate('/courses');
	};

	return (
		<div className='course-info-container'>
			<div className='backtocourses-button-container'>
				<Button onClick={() => onBackToCourses()}>Back to courses</Button>
			</div>
			<h2>{title}</h2>
			<div className='course-all-info'>
				<div className='course-description-info'>
					<p>{description}</p>
				</div>
				<div className='course-other-info'>
					<ul className='info-list'>
						<li>
							<span>ID</span>:{id}
						</li>
						<li>
							<span>Duration</span>:{pipeDuration(duration)}
						</li>
						<li>
							<span>Created</span>:{creationDate}
						</li>
						<li>
							<span>Authors</span>:{findAuthors(authors, allAuthors)}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

// CourseInfo.propTypes = {
// 	authorsList: PropTypes.array,
// 	coursesList: PropTypes.array,
// };

export default CourseInfo;
