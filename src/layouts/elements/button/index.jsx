import Button from '@mui/material/Button';

// eslint-disable-next-line react/prop-types
const CardButton = ({ text, className }) => {
	return (
		<Button variant='contained' className={className}>
			{text}
		</Button>
	);
};

export default CardButton;
