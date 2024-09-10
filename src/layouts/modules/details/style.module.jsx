import { Box, styled } from '@mui/material';

// eslint-disable-next-line react-refresh/only-export-components
export default styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	height: '768px',
	gap: '1rem',
	'& .card': {
		minWidth: '328px',
		padding: '20px',
		display: 'flex',
		flexDirection: 'column',
		gap: '12px',
		borderRadius: '10px',
		marginBottom: '1.5rem',
	},
}));
