import { useTheme } from '@emotion/react';
import { IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';

// eslint-disable-next-line react/prop-types
const MenuItem = ({ icon, title }) => {
	const theme = useTheme();

	return (
		<ListItem
			disableGutters
			sx={[
				{ ':hover': { background: theme.palette.background.lightGray } },
				{ borderRadius: '10px', transition: 'all 0.5s', cursor: 'pointer' },
			]}
		>
			<ListItemIcon>
				<IconButton aria-label='comment' sx={[{ ':hover': { background: 'inherit' } }]}>
					{icon}
				</IconButton>
			</ListItemIcon>
			<ListItemText primary={title} sx={{ color: theme.palette.text.lightWhite }} />
		</ListItem>
	);
};

export default MenuItem;
