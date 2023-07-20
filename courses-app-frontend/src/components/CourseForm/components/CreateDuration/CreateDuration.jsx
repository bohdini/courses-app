import './CreateDuration.scss';

import Input from '../../../../common/Input/Input';

import { pipeDuration } from '../../../../helpers/pipeDuration';

const CreateDuration = ({ duration, setDuration }) => {
	return (
		<div className='create-duration'>
			<h2>Duration</h2>
			<Input
				className='input'
				labelText='Duration'
				placeholderText={'Enter duration in minutes...'}
				onChange={(event) => setDuration(event.target.value)}
				type={'number'}
				value={duration === 0 ? '' : duration}
			/>
			<p>Duration: {pipeDuration(duration)}</p>
		</div>
	);
};

export default CreateDuration;
