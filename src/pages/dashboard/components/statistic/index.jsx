import { useTheme } from '@emotion/react';
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import { IoIosArrowDown } from 'react-icons/io';
import CircularProgressWithLabel from '../../../../layouts/elements/circleProgress';
import BoxRoot from './style.module';

const Statistic = () => {
	const theme = useTheme();

	return (
		<BoxRoot>
			<Box className='total'>
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
			<Box className='status'>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Typography sx={{ color: 'black', fontSize: '16px', fontWeight: 600 }}>
						Activity
					</Typography>
					<FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
						<Select
							labelId='demo-select-small-label'
							id='demo-select-small'
							label='Week'
							defaultValue='This Week'
							className='form'
							IconComponent={() => (
								<IoIosArrowDown
									style={{ fontSize: 25, color: theme.palette.background.lightBlue }}
								/>
							)}
						>
							<MenuItem value={'This Week'}>This Week</MenuItem>
							<MenuItem value={'This Month'}>This Month</MenuItem>
							<MenuItem value={'This Year'}>This Year</MenuItem>
						</Select>
					</FormControl>
				</Box>
				{/* <LineChart
						xAxis={[
							{
								type: 'category',
								data: data.map(item => item.x),
							},
						]}
						series={[
							{
								data: data.map(item => item.y),
								type: 'line',
							},
						]}
						width={500}
						height={300}
						tooltip={{
							trigger: 'item',
							formatter: params => `${params.data.x}: ${params.data.y} Task`,
						}}
						highlight={{
							data: [{ x: 'T', y: 2 }],
							style: { stroke: 'blue', strokeWidth: 2 },
						}}
					/> */}
			</Box>
		</BoxRoot>
	);
};

export default Statistic;
