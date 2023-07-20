import './Button.scss';

const Button = ({ children, onClick, className, type }) => {
	return (
		<button className={'button ' + className} onClick={onClick} type={type}>
			{children}
		</button>
	);
};

export default Button;
