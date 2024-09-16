import { useTheme } from '@emotion/react';
import {
	Avatar,
	Box,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Stack,
	SvgIcon,
	Typography,
} from '@mui/material';
import { CgSortAz } from 'react-icons/cg';
import { IoNotificationsOutline } from 'react-icons/io5';
import { TbCategory2 } from 'react-icons/tb';
import SearchBar from '../../../../layouts/elements/searchBar';

const Info = () => {
	const theme = useTheme();
	return (
		<Box>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
					<Typography sx={{ fontWeight: 600, fontSize: 24 }} color={theme.palette.text.darkBlue}>
						Explore Mentors
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
						<Avatar
							alt='Remy Sharp'
							src='/images/users/user.jpg'
							sx={{ height: '52px', width: '52px' }}
						/>
					</Stack>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',

					alignItems: 'center',
				}}
			>
				<SearchBar title={'Search Mentors'} />
				<List sx={{ display: 'flex', gap: 2 }}>
					<ListItem
						sx={{
							width: 'max-content',
							minHeight: 52,
							display: 'flex',
							gap: '12px',
							cursor: 'pointer',
							':hover': { background: theme.palette.background.lightGray },
							borderRadius: '10px',
						}}
					>
						<ListItemAvatar
							sx={{
								minWidth: '0',
								fontSize: '24px',
								display: 'flex',
								color: theme.palette.text.lightWhite,
							}}
						>
							<TbCategory2 />
						</ListItemAvatar>
						<ListItemText
							secondary='Category'
							sx={{ fontSize: '12px', fontWeight: 600, textAlign: 'center' }}
						/>
					</ListItem>
					<ListItem
						sx={{
							width: 'max-content',
							minHeight: 52,
							display: 'flex',
							gap: '12px',
							cursor: 'pointer',
							':hover': { background: theme.palette.background.lightGray },
							borderRadius: '10px',
							color: theme.palette.text.darkBlue,
						}}
					>
						<ListItemAvatar
							sx={{
								minWidth: '0',
								fontSize: '24px',
								display: 'flex',
								color: theme.palette.text.lightWhite,
							}}
						>
							<CgSortAz />
						</ListItemAvatar>
						<ListItemText
							secondary='Sort By : Popular'
							sx={{ fontSize: '12px', fontWeight: 600 }}
						/>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Info;
