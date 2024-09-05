/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import * as React from 'react';

ProgressBarCal.propTypes = {
	/**
	 * The value of the progress indicator for the determinate and buffer variants.
	 * Value between 0 and 100.
	 */
	value: PropTypes.number.isRequired,
};

function ProgressBarCal(props) {
	const theme = useTheme();
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1 }}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
				<Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Progress</Typography>
				<Typography
					sx={{ color: theme.palette.background.purpleDark, fontSize: '16px', fontWeight: 500 }}
				>
					{`${Math.round(props.value)}%`}
				</Typography>
			</Box>
			<Box sx={{ width: '100%' }}>
				<LinearProgress
					sx={{
						height: '8px',
						borderRadius: '8px',
						background: theme.palette.background.lightPurple,
						'& .MuiLinearProgress-bar': {
							background: theme.palette.background.purpleDark,
						},
					}}
					variant='determinate'
					{...props}
				/>
			</Box>
		</Box>
	);
}

export default function ProgressBar({ value }) {
	return (
		<Box sx={{ width: '100%' }}>
			<ProgressBarCal value={value} />
		</Box>
	);
}
