import Box from '@mui/material';
import BoxRoot from './style.module';
import Info from './components/Info/index';

const Dashboard = () => {
	return (
		<BoxRoot style={{ height: '100%' }}>
			<Info />
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					alignContent: 'space-between',
					p: 1,
					m: 1,
					bgcolor: 'background.paper',
					maxWidth: 380,
					height: 200,
					borderRadius: 1,
				}}
			>
				<div>div 1</div>
				<div>div 2</div>
				<div>div 3</div>
				<div>div 4</div>
				<div>div 5</div>
				<div>div 6</div>
				<div>div 7</div>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					alignContent: 'space-around',
					p: 1,
					m: 1,
					bgcolor: 'background.paper',
					maxWidth: 380,
					height: 200,
					borderRadius: 1,
				}}
			>
				<div>div 1</div>
				<div>div 2</div>
				<div>div 3</div>
				<div>div 4</div>
				<div>div 5</div>
				<div>div 6</div>
				<div>div 7</div>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					alignContent: 'stretch',
					p: 1,
					m: 1,
					bgcolor: 'background.paper',
					maxWidth: 380,
					height: 200,
					borderRadius: 1,
				}}
			>
				<div>div 1</div>
				<div>div 2</div>
				<div>div 3</div>
				<div>div 4</div>
				<div>div 5</div>
				<div>div 6</div>
				<div>div 7</div>
			</Box>
		</BoxRoot>
	);
};

export default Dashboard;
