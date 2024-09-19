import { FormGroup, styled } from '@mui/material';

// eslint-disable-next-line react-refresh/only-export-components
export default styled(FormGroup)(({ theme }) => ({
	width: '30%',
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
	margin: '0.5rem',
	marginTop: '1rem',
	'& .active': {
		border: `2px solid ${theme.palette.background.purpleDark}`,
		borderRadius: '10px',
		padding: '2px 15px',
	},
}));
