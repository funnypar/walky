import { IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';

// eslint-disable-next-line react/prop-types
const MenuItem = ({ icon, title }) => {
	return (
		<ListItem disableGutters>
			<ListItemIcon>
				<IconButton aria-label='comment'>{icon}</IconButton>
			</ListItemIcon>
			<ListItemText primary={title} />
		</ListItem>
	);
};

export default MenuItem;
