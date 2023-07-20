import { Link } from 'react-router-dom';

import './Page404.scss';

const Page404 = () => {
	return (
		<div className='page404-container'>
			<p>Page Not Found 404</p>
			<Link to='/courses'>Back to Courses</Link>
		</div>
	);
};

export default Page404;
