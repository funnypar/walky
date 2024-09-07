import Info from './components/Info/index';
import Mentors from './components/mentors';
import Statistic from './components/statistic';
import Tasks from './components/tasks';
import BoxRoot from './style.module';

const Dashboard = () => {
	return (
		<BoxRoot style={{ height: '100%' }}>
			<Info />
			<Statistic />
			<Mentors />
			<Tasks />
		</BoxRoot>
	);
};

export default Dashboard;
