import { useTheme } from '@emotion/react';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Menu from '../../elements/menu/index';
import Details from '../details';
import GridRoot from './style.module';

const MainLayout = () => {
	const { pathname } = useLocation();
	const [backCl, setBackCl] = useState();
	const theme = useTheme();

	useEffect(() => {
		if (pathname === `/dashboard`) {
			setBackCl(`${theme.palette.background.darkWhite}`);
		} else if (pathname === `/task`) {
			setBackCl('white');
		}
	}, [pathname, theme]);

	return (
		<GridRoot container>
			<Grid item xs={6} md={1.75} className='menu'>
				<Menu />
			</Grid>
			<Grid item xs={6} md={7.25} className='main' sx={{ background: backCl }}>
				<Outlet />
			</Grid>
			<Grid item xs={6} md={3} className='details'>
				<Details />
			</Grid>
		</GridRoot>
	);
};

export default MainLayout;
