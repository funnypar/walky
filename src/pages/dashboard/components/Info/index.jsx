import { useTheme } from '@emotion/react';
import { Avatar, Box, Stack, SvgIcon, Typography } from '@mui/material';
import { IoNotificationsOutline } from 'react-icons/io5';

const Info = () => {
	const theme = useTheme();
	return (
		<Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
				<Typography sx={{ fontWeight: 600, fontSize: 24 }} color={theme.palette.text.darkBlue}>
					Hi, Skylar Dias
				</Typography>
				<Typography sx={{ fontWeight: 500, fontSize: 16 }} color={theme.palette.text.lightBlue}>
					Let's finish your task today!
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
				<Box className='icon'>
					<SvgIcon
						sx={{
							height: '24px',
							width: '24px',
							color: theme.palette.text.lightWhite,
						}}
					>
						<IoNotificationsOutline />
					</SvgIcon>
				</Box>
				<Stack direction='row' spacing={2} className='icon'>
					<Avatar alt='Remy Sharp' src='/images/user.jpg' sx={{ height: '52px', width: '52px' }} />
				</Stack>
			</Box>
		</Box>
	);
};

export default Info;
