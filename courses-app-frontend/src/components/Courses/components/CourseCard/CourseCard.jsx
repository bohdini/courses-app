import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './CourseCard.scss';

import Button from '../../../../common/Button/Button';

import { getUser } from '../../../../selectors';

import // deleteCourse,
// editCourse,
'../../../../store/courses/actionCreators';

import { deleteCourseThunk } from '../../../../store/courses/thunk';

const CourseCard = (props) => {
	const { token, role } = useSelector(getUser);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onShowCourse = (courseId, courseInfo) => {
		// navigate(`${courseId}`, { state: { courseInfo: courseInfo } });
		navigate(`${courseId}`);
	};

	const onEditCourse = (id) => {
		// console.log(id);
		// dispatch(editCourse(id));
		navigate(`update/${id}`);
	};

	const onDeleteCourse = (id) => {
		dispatch(deleteCourseThunk(token, id));
	};

	return (
		<li className='card'>
			<div className='card-left'>
				<div className='card-title'>{props.title}</div>
				<div className='card-description'>{props.description}</div>
			</div>
			<div className='card-right'>
				<div className='card-authors'>
					<span style={{ fontWeight: 'bold' }}>Authors:</span> {props.authors}
				</div>
				<div className='card-duration'>
					<span style={{ fontWeight: 'bold' }}>Duration:</span> {props.duration}
				</div>
				<div className='card-creation-date'>
					<span style={{ fontWeight: 'bold' }}>Created:</span>{' '}
					{props.creationDate}
				</div>
				<div className='card-show-course-container'>
					<Button
						className={'course-card-button'}
						onClick={() => onShowCourse(props.id, props)}
					>
						Show course
					</Button>
					{role === 'admin' ? (
						<>
							<Button
								className='course-card-button'
								onClick={() => onEditCourse(props.id)}
							>
								Edit
							</Button>
							<Button
								className='course-card-button'
								onClick={() => onDeleteCourse(props.id)}
							>
								Delete
							</Button>
						</>
					) : null}
				</div>
			</div>
		</li>
	);
};

export default CourseCard;
