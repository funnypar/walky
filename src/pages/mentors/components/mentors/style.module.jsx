import { Box, styled } from '@mui/material';

// eslint-disable-next-line react-refresh/only-export-components
export default styled(Box)(({ theme }) => ({
	display: 'flex',
	borderRadius: '10px',
	color: 'white',
	gap: '8px',
	marginTop: '12px',
	marginBottom: '2rem',
	fontFamily: theme.typography,
	height: '214px',
	padding: '8px',
	width: '100%',
	flexDirection: 'column',
	justifyContent: 'space-between',
	'& .header': {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		marginBottom: 2,
	},
}));
