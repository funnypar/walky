import { InfinitySpin } from 'react-loader-spinner';

const Spinner = () => {
	return (
		<InfinitySpin visible={true} width='100%' color='#4fa94d' ariaLabel='infinity-spin-loading' />
	);
};

export default Spinner;
