import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Menu from '../../elements/menu/index';
import GridRoot from './style.module';

const MainLayout = () => {
	return (
		<GridRoot container>
			<Grid item xs={6} md={1.75} className='menu'>
				<Menu />
			</Grid>
			<Grid item xs={6} md={7.75} sx={{ background: 'blue' }}>
				<Outlet />
			</Grid>
			<Grid item xs={6} md={2.5} sx={{ background: 'yellow' }}>
				<div>xs=6 md=4</div>
			</Grid>
		</GridRoot>
	);
};

export default MainLayout;
