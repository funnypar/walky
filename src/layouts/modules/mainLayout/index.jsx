import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Menu from '../../elements/menu/index';
import Details from '../details';
import GridRoot from './style.module';

const MainLayout = () => {
	return (
		<GridRoot container>
			<Grid item xs={6} md={1.75} className='menu'>
				<Menu />
			</Grid>
			<Grid item xs={6} md={7.25} className='main'>
				<Outlet />
			</Grid>
			<Grid item xs={6} md={3} className='details'>
				<Details />
			</Grid>
		</GridRoot>
	);
};

export default MainLayout;
