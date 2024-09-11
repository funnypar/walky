import { Box, styled } from '@mui/material';

// eslint-disable-next-line react-refresh/only-export-components
export default styled(Box)(({ theme }) => ({
	padding: '1rem',
	fontFamily: theme.typography,
	overflow: 'scroll',
	'& .icon': {
		background: theme.palette.background.lightGray,
		height: '52px',
		width: '52px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '50%',
		position: 'relative',
		cursor: 'pointer',
		'&::before': {
			content: '""',
			height: '8px',
			width: '8px',
			borderRadius: '50%',
			background: theme.palette.background.pink,
			position: 'absolute',
			top: '1rem',
			left: '1.75rem',
		},
	},
}));
