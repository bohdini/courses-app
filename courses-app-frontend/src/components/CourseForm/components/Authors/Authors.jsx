import './Authors.scss';

const Authors = ({ AuthorsList, CourseAuthors }) => {
	return (
		<>
			<div className='add-authors'>
				<h2>Authors</h2>
				<ul className='authors-list'>{AuthorsList}</ul>
			</div>

			<div className='authors-list'>
				<h2>Course authors</h2>
				<ul className='course-authors'>{CourseAuthors}</ul>
			</div>
		</>
	);
};

export default Authors;
