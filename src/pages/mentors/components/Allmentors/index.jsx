import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import MentorsSpinner from '../../../../layouts/elements/spinner';
import getAllMentors from '../../../../utils/service/getAllMentors';
import Mentor from '../mentor';
import BoxRoot from './style.module';

const AllMentors = () => {
	const theme = useTheme();
	const { data: mentors, isLoading } = useQuery({
		queryFn: () => getAllMentors(),
		queryKey: ['mentors'],
	});

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
				{isLoading ? (
					<MentorsSpinner />
				) : (
					mentors?.map((el, index) => {
						return <Mentor datas={el} key={index} />;
					})
				)}
			</Box>
		</BoxRoot>
	);
};

export default AllMentors;
