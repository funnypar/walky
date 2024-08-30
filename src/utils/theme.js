import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		background: {
			white: '#FFFFFF',
			darkWhite: '#FAFAFA',
			semiWhite: '#F5F5F7',
			lightWhite: '#FFFFFF14',
			lightGray: '#F5F5F7',
			darkBlue: '#141522',
			pink: '#FF4D5E',
			purpleDark: '#546FFF',
		},
		text: {
			lightWhite: '#8E92BC',
			darkBlue: '#141522',
			lightBlue: '#54577A',
		},
	},
	// breakpoints: {
	// 	values: {
	// 		xs: 0,
	// 		sm: 576,
	// 		md: 768,
	// 		lg: 1200,
	// 		xl: 1536,
	// 	},
	// },
	// typography: {
	// 	fontFamily: 'IRANSansX',
	// },
	// spacing: [4, 8, 16, 32, 64],
});

// theme.typography.h6 = {
// 	fontSize: '18px',
// 	[theme.breakpoints.down('md')]: {
// 		fontSize: '16px',
// 	},
// 	[theme.breakpoints.down('sm')]: {
// 		fontSize: '14px',
// 	},
// };

// theme.typography.caption = {
// 	fontSize: '12px',
// 	[theme.breakpoints.down('md')]: {
// 		fontSize: '10px',
// 	},
// 	[theme.breakpoints.down('sm')]: {
// 		fontSize: '6px',
// 	},
// };

// theme.typography.subtitle1 = {
// 	fontSize: '15px',
// 	[theme.breakpoints.down('md')]: {
// 		fontSize: '13px',
// 	},
// 	[theme.breakpoints.down('sm')]: {
// 		fontSize: '11px',
// 	},
// };

// theme.typography.subtitle2 = {
// 	fontSize: '14px',
// 	[theme.breakpoints.down('md')]: {
// 		fontSize: '12px',
// 	},
// 	[theme.breakpoints.down('sm')]: {
// 		fontSize: '10px',
// 	},
// };

export default theme;
