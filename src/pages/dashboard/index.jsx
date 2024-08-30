import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import CircularProgressWithLabel from '../../layouts/elements/circleProgress';
import Info from './components/Info/index';
import BoxRoot from './style.module';

const Dashboard = () => {
	const theme = useTheme();

	return (
		<BoxRoot style={{ height: '100%' }}>
			<Info />
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					p: 1,
					m: 1,
					borderRadius: '10px',
					color: 'white',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						p: '20px',
						m: 1,
						width: 194,
						height: 214,
						borderRadius: '10px',
						background: theme.palette.background.darkBlue,
					}}
				>
					<Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Running Task</Typography>
					<Typography sx={{ fontWeight: 600, fontSize: '32px' }}>65</Typography>
					<Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
						<CircularProgressWithLabel value={45} />
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								flexDirection: 'column',
								gap: '4px',
							}}
						>
							<Typography sx={{ fontSize: '20px', fontWeight: 600 }}>100</Typography>
							<Typography
								sx={{ fontSize: '14px', fontWeight: 500, color: theme.palette.text.lightWhite }}
							>
								Task
							</Typography>
						</Box>
					</Box>
				</Box>
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
