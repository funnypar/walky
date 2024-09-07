import { Box, styled } from '@mui/material';

// eslint-disable-next-line react-refresh/only-export-components
export default styled(Box)(({ theme }) => ({
	display: 'flex',
	borderRadius: '10px',
	color: 'white',
	gap: '24px',
	margin: '1rem',
	'& .total': {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: '20px',
		width: '194px',
		height: '214px',
		borderRadius: '10px',
		background: theme.palette.background.darkBlue,
	},
	'& .status': {
		background: theme.palette.background.lightGray,
		borderRadius: '10px',
		height: '214px',
		padding: '20px',
	},
	'& .form': {
		fontSize: '12px',
		fontWeight: 500,
		'& .MuiOutlinedInput-notchedOutline': {
			border: 'none',
		},
		'&:hover .MuiOutlinedInput-notchedOutline': {
			border: 'none',
		},
		'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
			border: 'none',
		},
	},
}));
