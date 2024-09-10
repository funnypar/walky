import Button from '@mui/material/Button';

// eslint-disable-next-line react/prop-types
const CardButton = ({ text, className, sx }) => {
	return (
		<Button variant='contained' className={className} sx={{ ...sx }}>
			{text}
		</Button>
	);
};

export default CardButton;
