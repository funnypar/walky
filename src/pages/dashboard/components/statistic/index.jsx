import { useTheme } from '@emotion/react';
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import { IoIosArrowDown } from 'react-icons/io';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import CircularProgressWithLabel from '../../../../layouts/elements/circleProgress';
import BoxRoot from './style.module';

const Statistic = () => {
	const theme = useTheme();
	const data = [
		{ name: 'S', Task: 1 },
		{ name: 'M', Task: 2 },
		{ name: 'T', Task: 1 },
		{ name: 'W', Task: 2.9 },
		{ name: 'T', Task: 1.5 },
		{ name: 'F', Task: 2 },
		{ name: 'S', Task: 1.75 },
	];

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
				<LineChart
					width={600}
					height={130}
					data={data}
					style={{
						fontFamily: theme.typography,
					}}
					margin={{ top: 5, right: 5, bottom: 5, left: -30 }}
				>
					<Line
						type='monotone'
						dataKey='Task'
						stroke={theme.palette.background.darkBlue}
						strokeWidth={3}
						activeDot={{
							stroke: theme.palette.background.purpleDark,

							fill: 'white',
							strokeWidth: 4,
							r: 7,
						}}
					/>
					<CartesianGrid
						stroke={theme.palette.background.lightBlue}
						strokeDasharray='85 5'
						horizontal={false}
					/>
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip
						contentStyle={{
							color: 'white',
							fontFamily: theme.typography.fontFamily,
							background: 'black',
							flexDirection: 'row-reverse',
						}}
						itemStyle={{
							color: 'white',
							fontFamily: theme.typography.fontFamily,
							background: 'black',
						}}
						labelStyle={{ display: 'none' }}
						formatter={(value, name) => `${value} ${name}`}
						defaultValue=''
					/>
				</LineChart>
			</Box>
		</BoxRoot>
	);
};

export default Statistic;
