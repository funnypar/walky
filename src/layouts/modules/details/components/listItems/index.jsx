import { useTheme } from '@emotion/react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

const Demo = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	width: '100%',
}));

export default function ListItems() {
	const theme = useTheme();
	const items = [
		{ id: 1, content: 'Understanding the tools in Figma' },
		{ id: 2, content: 'Understand the basics of making designs' },
		{ id: 3, content: 'Design a mobile application with figma' },
	];
	return (
		<Box sx={{ width: '100%' }}>
			<Demo>
				<List>
					{items.map(item => (
						<ListItem key={item.id}>
							<ListItemIcon>
								<Box
									sx={{
										background: theme.palette.background.lightGray,
										borderRadius: '10px',
										padding: '1rem',
										fontSize: '14px',
										fontWeight: 600,
										color: theme.palette.background.darkBlue,
										fontFamily: theme.typography,
									}}
								>
									{item.id}
								</Box>
							</ListItemIcon>
							<ListItemText primary={item.content} sx={{ fontSize: '14px', fontWeight: 500 }} />
						</ListItem>
					))}
				</List>
			</Demo>
		</Box>
	);
}
