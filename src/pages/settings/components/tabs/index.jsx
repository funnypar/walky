import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import General from '../general';
import Notification from '../notification';

const SettingsTabs = () => {
	const [value, setValue] = useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%', typography: 'body1' }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList onChange={handleChange} aria-label='lab API tabs example'>
						<Tab label='General' value='1' />
						<Tab label='Notification' value='2' />
					</TabList>
				</Box>
				<TabPanel value='1'>
					<General />
				</TabPanel>
				<TabPanel value='2'>
					<Notification />
				</TabPanel>
			</TabContext>
		</Box>
	);
};

export default SettingsTabs;
