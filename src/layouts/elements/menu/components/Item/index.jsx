import { useTheme } from '@emotion/react';
import { IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const MenuItem = ({ icon, title, path }) => {
	const theme = useTheme();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [active, setActive] = useState(false);

	useEffect(() => {
		if (pathname === `/${path}`) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [pathname, path]);

	return (
		<ListItem
			disableGutters
			sx={[
				{ ':hover': { background: theme.palette.background.lightGray } },
				{ borderRadius: '10px', transition: 'all 0.5s', cursor: 'pointer' },
				{ background: active ? theme.palette.background.lightGray : 'inherit' },
			]}
			onClick={() => navigate(`/${path}`)}
		>
			<ListItemIcon>
				<IconButton
					aria-label='comment'
					sx={[{ ':hover': { background: 'inherit' }, color: active ? 'black' : 'none' }]}
				>
					{icon}
				</IconButton>
			</ListItemIcon>
			<ListItemText
				primary={title}
				sx={{
					color: active ? 'black' : theme.palette.text.lightWhite,
				}}
			/>
		</ListItem>
	);
};

export default MenuItem;
