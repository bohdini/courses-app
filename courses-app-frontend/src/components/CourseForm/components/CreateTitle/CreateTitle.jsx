import './CreateTitle.scss';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

const CreateTitle = ({ title, setTitle, onBackToCourses, buttonText }) => {
	return (
		<div className='course-title'>
			<Input
				labelText={'Title'}
				placeholderText={'Enter title...'}
				name={'title'}
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<Button type='button' onClick={() => onBackToCourses()}>
				Back to courses
			</Button>
			<Button type='submit'>{buttonText}</Button>
		</div>
	);
};

export default CreateTitle;
