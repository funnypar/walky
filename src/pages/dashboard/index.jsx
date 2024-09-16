import Tasks from '../../layouts/modules/tasks';
import Info from './components/Info/index';
import Mentors from './components/mentors';
import Statistic from './components/statistic';
import BoxRoot from './style.module';

const Dashboard = () => {
	return (
		<BoxRoot style={{ height: '100%' }}>
			<Info />
			<Statistic />
			<Mentors title={'Monthly Mentors'} />
			<Tasks title={'Upcoming Task'} />
		</BoxRoot>
	);
};

export default Dashboard;
