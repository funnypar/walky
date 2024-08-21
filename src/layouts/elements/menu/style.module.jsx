import { Stack, styled } from '@mui/material';

// eslint-disable-next-line react-refresh/only-export-components
export default styled(Stack)(({ theme }) => ({
	padding: 32,
	position: 'relative',
	background: theme.palette.background.white,
	display: 'flex',
	gap: '3rem',
	height: '100%',
	'& .MuiListItem-secondaryAction': {
		left: 0,
	},
	'& .img': {
		maxHeight: '40px',
	},
}));
