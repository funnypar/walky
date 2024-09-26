import Button from '@mui/material/Button';

// eslint-disable-next-line react/prop-types
const CardButton = ({ text, className, sx, onClick }) => {
	return (
		<Button variant='contained' className={className} sx={{ ...sx }} onClick={onClick}>
			{text}
		</Button>
	);
};

export default CardButton;
