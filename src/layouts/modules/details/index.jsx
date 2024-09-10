import { useTheme } from '@emotion/react';
import {
	Avatar,
	AvatarGroup,
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import { IoMdTime } from 'react-icons/io';
import { MdMoreHoriz } from 'react-icons/md';
import CardButton from '../../elements/button';
import ProgressBar from '../../elements/progressBar';
import ListItems from './components/listItems';
import BoxRoot from './style.module';

const Details = () => {
	const theme = useTheme();
	return (
		<BoxRoot>
			<Card className='card'>
				<CardContent sx={{ padding: 0, display: 'flex', justifyContent: 'space-between' }}>
					<Typography sx={{ fontSize: '14px', fontWeight: 600 }}>Task Today</Typography>
					<Typography
						sx={{
							fontSize: '20px',
							fontWeight: 600,
							cursor: 'pointer',
						}}
					>
						<MdMoreHoriz />
					</Typography>
				</CardContent>
				<CardMedia
					sx={{ height: 140, borderRadius: '10px' }}
					image='/images/images/image2.jpg'
					title='dashboard'
				/>
				<CardContent sx={{ padding: 0 }}>
					<Typography sx={{ fontSize: '16px', fontWeight: 600 }}>
						Creating Awesome Mobile Apps
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
				<CardActions sx={{ padding: 0, display: 'flex', flexDirection: 'column', gap: 3 }}>
					<ProgressBar value={90} />
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
						}}
					>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
								1 Hour
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
					<Box
						style={{ width: '90%', height: '2px', background: theme.palette.background.lightGray }}
					></Box>
					<CardContent
						sx={{
							padding: 0,
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							width: '100%',
						}}
					>
						<Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Detail Task</Typography>
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
					<ListItems />
					<CardButton
						text='Go To Detail'
						sx={{ width: '100%', background: theme.palette.background.purpleDark }}
					/>
				</CardActions>
			</Card>
		</BoxRoot>
	);
};

export default Details;
