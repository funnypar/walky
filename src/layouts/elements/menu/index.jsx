import { Box, List } from '@mui/material';
import { FaTasks } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { RxDashboard } from 'react-icons/rx';
import { SiFrontendmentor } from 'react-icons/si';
import HelpCenter from './components/helpCenter';
import MenuItem from './components/Item';
import StackRoot from './style.module';

const Menu = () => {
	return (
		<StackRoot>
			<Box>
				<img src='/images/logo.png' alt='logo' className='img' />
			</Box>
			<List>
				<MenuItem icon={<RxDashboard />} title={'Overview'} path={'dashboard'} />
				<MenuItem icon={<FaTasks />} title={'Task'} path={'task'} />
				<MenuItem icon={<SiFrontendmentor />} title={'Mentors'} path={'mentors'} />
				<MenuItem icon={<IoSettingsOutline />} title={'Settings'} path={'settings'} />
			</List>
			<HelpCenter />
		</StackRoot>
	);
};

export default Menu;
