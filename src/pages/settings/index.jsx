import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import Info from './components/info';
import SettingTabs from './components/tabs/index';
import BoxRoot from './style.module';

const MentorsLayout = () => {
	const theme = useTheme();

	return (
		<BoxRoot sx={{ height: '100vh' }}>
			<Info />
			<Box
				sx={{
					background: theme.palette.background.lightGray,
					height: '100%',
					padding: '1rem',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Box sx={{ background: 'white', borderRadius: '10px' }}>
					<SettingTabs />
				</Box>
			</Box>
		</BoxRoot>
	);
};

export default MentorsLayout;
