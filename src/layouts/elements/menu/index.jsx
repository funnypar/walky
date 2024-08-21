import { Box, List } from '@mui/material';
import { AiOutlineMessage } from 'react-icons/ai';
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
				<MenuItem icon={<RxDashboard />} title={'Overview'} />
				<MenuItem icon={<FaTasks />} title={'Task'} />
				<MenuItem icon={<SiFrontendmentor />} title={'Mentors'} />
				<MenuItem icon={<AiOutlineMessage />} title={'Message'} />
				<MenuItem icon={<IoSettingsOutline />} title={'Settings'} />
			</List>
			<HelpCenter />
		</StackRoot>
	);
};

export default Menu;
