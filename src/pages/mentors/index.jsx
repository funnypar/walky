import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import Mentors from '../dashboard/components/mentors';
import AllMentors from './components/Allmentors';
import Info from './components/info';
import BoxRoot from './style.module';

const MentorsLayout = () => {
	const theme = useTheme();

	return (
		<BoxRoot sx={{ height: '100vh' }}>
			<Info />
			<Box
				sx={{
					background: theme.palette.background.lightGray,
					height: '100%',
					paddingX: '1rem',
					paddingBottom: '22rem',
					display: 'flex',
					flexDirection: 'column',
					overflow: 'scroll',
				}}
			>
				<Mentors title={'Recent Mentors'} />
				<AllMentors />
			</Box>
		</BoxRoot>
	);
};

export default MentorsLayout;
