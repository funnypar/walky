import { useTheme } from '@emotion/react';
import {
	Avatar,
	AvatarGroup,
	Box,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import { IoMdTime } from 'react-icons/io';
import ProgressBar from '../../../../elements/progressBar';
import CardRoot from './style.module';

const Card = () => {
	const theme = useTheme();
	return (
		<CardRoot>
			<CardMedia
				sx={{ height: 140, borderRadius: '10px' }}
				image='/images/images/image1.jpg'
				title='dashboard'
			/>
			<CardContent sx={{ padding: 0 }}>
				<Typography sx={{ fontSize: '16px', fontWeight: 600 }}>
					Creating Mobile App Design
				</Typography>
				<Typography
					sx={{
						fontSize: '12px',
						fontWeight: 500,
						color: theme.palette.text.lightBlue,
					}}
				>
					UI UX Design
				</Typography>
			</CardContent>
			<CardActions sx={{ padding: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
				<ProgressBar value={75} />
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%',
					}}
				>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<Typography
							sx={{
								textAlign: 'center',
								fontSize: '18.5px',
								fill: theme.palette.background.lightBlue,
								display: 'flex',
							}}
						>
							<IoMdTime />
						</Typography>
						<Typography
							sx={{
								fontSize: '16px',
								fontWeight: 500,
								color: theme.palette.text.darkBlue,
							}}
						>
							3 Days Left
						</Typography>
					</Box>
					<AvatarGroup max={5}>
						<Avatar
							alt='Remy Sharp'
							src='/images/users/user.jpg'
							sx={{ height: '24px', width: '24px' }}
						/>
						<Avatar
							alt='Travis Howard'
							src='/images/users/user1.jpg'
							sx={{ height: '24px', width: '24px' }}
						/>
						<Avatar
							alt='Cindy Baker'
							src='/images/users/user2.jpg'
							sx={{ height: '24px', width: '24px' }}
						/>
						<Avatar
							alt='Agnes Walker'
							src='/images/users/user3.jpg'
							sx={{ height: '24px', width: '24px' }}
						/>
						<Avatar
							alt='Trevor Henderson'
							src='/images/users/user4.jpg'
							sx={{ height: '24px', width: '24px' }}
						/>
					</AvatarGroup>
				</Box>
			</CardActions>
		</CardRoot>
	);
};

export default Card;
