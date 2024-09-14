import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import Tasks from '../../layouts/modules/tasks';
import Info from './components/info';
import BoxRoot from './style.module';

const Task = () => {
	const theme = useTheme();

	return (
		<BoxRoot sx={{ height: '100vh' }}>
			<Info />
			<Box
				sx={{
					background: theme.palette.background.lightGray,
					height: '100%',
					paddingX: '1rem',
					paddingBottom: '22rem',
					display: 'flex',
					flexDirection: 'column',
					overflow: 'scroll',
					gap: 28,
				}}
			>
				<Tasks title={'Time Limit'} />
				<Tasks title={'New Tasks'} />
			</Box>
		</BoxRoot>
	);
};

export default Task;
