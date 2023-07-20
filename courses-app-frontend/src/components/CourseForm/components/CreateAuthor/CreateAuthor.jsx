import './CreateAuthor.scss';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

const CreateAuthor = ({
	setNewAuthorName,
	onNewAuthorCreate,
	newAuthorName,
}) => {
	return (
		<div className='create-author'>
			<h2>Add Author</h2>
			<Input
				className='input'
				labelText='Author name'
				placeholderText={'Enter author name...'}
				onChange={(event) => setNewAuthorName(event.target.value)}
			/>
			<Button onClick={() => onNewAuthorCreate(newAuthorName)} type='button'>
				Create author
			</Button>
		</div>
	);
};

export default CreateAuthor;
