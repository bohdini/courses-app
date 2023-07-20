import './Input.scss';

const Input = ({
	className,
	labelText,
	placeholderText,
	onChange,
	type,
	id,
	htmlFor,
	name,
	required,
	minLength,
	min,
	value,
}) => {
	return (
		<div className='label-input'>
			<label htmlFor={htmlFor}>{labelText}</label>
			<input
				className={'input ' + className}
				type={type}
				placeholder={placeholderText}
				id={id}
				onChange={onChange}
				name={name}
				required={required}
				minLength={minLength}
				min={min}
				value={value}
			/>
		</div>
	);
};

export default Input;
