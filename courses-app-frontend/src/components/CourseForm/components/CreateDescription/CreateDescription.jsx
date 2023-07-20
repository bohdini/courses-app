import './CreateDescription.scss';

const CreateDescription = ({ description, setDescription }) => {
	return (
		<div className='course-description'>
			<label htmlFor='course-description'>Description</label>
			<textarea
				id='course-description'
				className='input-description'
				rows={6}
				placeholder='Enter description...'
				value={description}
				onChange={(event) => setDescription(event.target.value)}
			/>
		</div>
	);
};

export default CreateDescription;
