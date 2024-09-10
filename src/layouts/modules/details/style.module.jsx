import { Box, styled } from '@mui/material';

// eslint-disable-next-line react-refresh/only-export-components
export default styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
	'& .card': {
		minWidth: '328px',
		padding: '20px',
		display: 'flex',
		flexDirection: 'column',
		gap: '20px',
		marginBottom: '3.5rem',
	},
}));
