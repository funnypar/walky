import { IconButton, Typography } from '@mui/material';
import { MdQuestionMark } from 'react-icons/md';
import TransitionsModal from '../../../modal';
import BoxRoot from './style.module';

const HelpCenter = () => {
	return (
		<BoxRoot>
			<IconButton aria-label='Example' className='icon'>
				<MdQuestionMark fill='white' />
			</IconButton>
			<Typography sx={{ color: 'white', textAlign: 'center', fontWeight: 600, fontSize: '16px' }}>
				Help Center
			</Typography>
			<Typography
				sx={{
					color: 'white',
					textAlign: 'center',
					fontWeight: 500,
					fontSize: '12px',
					marginTop: '0.75rem',
				}}
			>
				Having Trouble in Learning. Please contact us for more questions.
			</Typography>
			<TransitionsModal />
		</BoxRoot>
	);
};

export default HelpCenter;
