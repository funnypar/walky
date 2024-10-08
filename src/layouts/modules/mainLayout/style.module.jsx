import { Grid, styled } from '@mui/material';

// eslint-disable-next-line react-refresh/only-export-components
export default styled(Grid)(({ theme }) => ({
	height: '100vh',
	width: '100%',
	margin: 0,
	padding: 0,
	overflow: 'hidden',
	'& .menu': {
		background: theme.palette.background.white,
		overflow: 'hidden',
	},
	'& .main': {
		padding: 6,
	},
	'& .details': {
		background: theme.palette.background.lightGray,
		padding: '1rem',
	},
}));
