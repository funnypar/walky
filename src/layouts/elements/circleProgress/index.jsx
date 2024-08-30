/* eslint-disable react/prop-types */
import { useTheme } from '@emotion/react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const CircularProgressWithLabel = props => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				position: 'relative',
				display: 'inline-flex',
				width: '68px',
				height: '68px',
			}}
		>
			<CircularProgress
				variant='determinate'
				{...props}
				style={{
					color: theme.palette.background.purpleDark,
					width: '68px',
					height: '68px',
					thickness: '3px',
				}}
				thickness={2}
			/>
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography
					variant='caption'
					component='div'
					sx={{ color: 'white', fontSize: 18, fontWeight: 500 }}
				>
					{`${Math.round(props.value)}%`}
				</Typography>
			</Box>
		</Box>
	);
};

export default CircularProgressWithLabel;
