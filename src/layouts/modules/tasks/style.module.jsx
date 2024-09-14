import { Box, styled } from '@mui/material';

// eslint-disable-next-line react-refresh/only-export-components
export default styled(Box)(({ theme, sx }) => ({
	...sx,
	display: 'flex',
	borderRadius: '10px',
	color: 'white',
	gap: '24px',
	marginTop: '12px',
	fontFamily: theme.typography,
	height: '180px',
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
