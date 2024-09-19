import { Box } from '@mui/material';
import CardButton from '../../../../layouts/elements/button';
import Switch from '../../../../layouts/elements/switch';

const Notification = () => {
	return (
		<Box>
			<Switch title={'Task Update'} />
			<Switch title={'Task Deadline'} defaultChecked={true} />
			<Switch title={'Mentor Help'} />
			<CardButton text={'Save Changes'} sx={{ padding: '0.5rem 4rem', margin: '1.5rem 0.75rem' }} />
		</Box>
	);
};

export default Notification;
