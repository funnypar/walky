import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import Mentor from '../mentor';
import BoxRoot from './style.module';

const AllMentors = () => {
	const theme = useTheme();

	return (
		<BoxRoot>
			<Box className='header'>
				<Typography
					sx={{
						color: 'black',
						fontSize: '24px',
						fontWeight: 600,
						fontFamily: theme.Typography,
					}}
				>
					Mentors
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
				<Mentor
					followed={true}
					description="Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . ."
				/>

				<Mentor />
				<Mentor />
				<Mentor />
				<Mentor />
				<Mentor />
			</Box>
		</BoxRoot>
	);
};

export default AllMentors;
