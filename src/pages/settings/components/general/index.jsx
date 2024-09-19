import { Box } from '@mui/material';
import CardButton from '../../../../layouts/elements/button';
import Options from '../../../../layouts/elements/options';
import Selection from '../../../../layouts/elements/selection';

const General = () => {
	return (
		<Box>
			<Options title='Language' items={['English', 'Deutsch', 'Farsi', 'French']} />
			<Options title='Timezone' items={['English', 'Germany', 'Iran', 'USA']} />
			<Selection title='Timezone' />
			<CardButton text={'Save Changes'} sx={{ padding: '0.5rem 4rem', margin: '1.5rem 0.75rem' }} />
		</Box>
	);
};

export default General;
