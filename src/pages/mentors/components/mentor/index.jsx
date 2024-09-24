/* eslint-disable react/prop-types */
import { useTheme } from '@emotion/react';
import {
	Avatar,
	Box,
	CardActions,
	CardContent,
	CardHeader,
	Card as Cart,
	IconButton,
	Typography,
} from '@mui/material';
import { FaStar } from 'react-icons/fa';
import { GoTasklist } from 'react-icons/go';

// eslint-disable-next-line react/prop-types
const Mentor = ({ datas }) => {
	const theme = useTheme();

	return (
		<Cart sx={{ minWidth: '328px' }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<CardHeader
					avatar={<Avatar aria-label='recipe ' src={datas?.image} />}
					title={`${datas?.first_name} ${datas?.last_name}`}
					subheader={datas?.job}
				/>
				<CardActions disableSpacing>
					<IconButton
						aria-label='follow'
						sx={{
							color: `${
								datas?.followed ? theme.palette.text.purpleDark : theme.palette.text.lightBlue
							}`,
							fontSize: '14px',
							fontWeight: 500,
							'&:hover': {
								background: 'none',
							},
							fontFamily: theme.typography,
						}}
					>
						{datas?.followed ? '+ Follow' : 'Followed'}
					</IconButton>
				</CardActions>
			</Box>
			{
				<Typography
					sx={{
						fontSize: '14px',
						fontWeight: 500,
						color: theme.palette.text.lightWhite,
						maxWidth: '306px',
						paddingLeft: '24px',
					}}
				>
					{datas?.description}
				</Typography>
			}
			<CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 1,
					}}
				>
					<Typography sx={{ fontSize: '20px', textAlign: 'center' }}>
						<GoTasklist />
					</Typography>
					<Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
						{datas?.tasks_number} Task
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 1,
					}}
				>
					<Typography sx={{ fontSize: '20px', textAlign: 'center', fill: 'yellow' }}>
						<FaStar fill='gold' />
					</Typography>
					<Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
						{datas.rated} ({datas?.views} Reviews)
					</Typography>
				</Box>
			</CardContent>
		</Cart>
	);
};

export default Mentor;
