import { useTheme } from '@emotion/react';
import {
	Avatar,
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	FormControl,
	IconButton,
	MenuItem,
	MobileStepper,
	Paper,
	Select,
	Slide,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { GoTasklist } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import CircularProgressWithLabel from '../../layouts/elements/circleProgress';
import Info from './components/Info/index';
import BoxRoot from './style.module';

const Dashboard = () => {
	const theme = useTheme();
	const slides = [
		{ label: 'Slide 1', content: 'This is the first slide' },
		{ label: 'Slide 2', content: 'This is the second slide' },
		{ label: 'Slide 3', content: 'This is the third slide' },
	];
	const [activeStep, setActiveStep] = useState(0);
	const maxSteps = slides.length;
	const handleNext = () => {
		if (activeStep < maxSteps - 1) {
			setActiveStep(prevActiveStep => prevActiveStep + 1);
		}
	};

	const handleBack = () => {
		if (activeStep > 0) {
			setActiveStep(prevActiveStep => prevActiveStep - 1);
		}
	};

	return (
		<BoxRoot style={{ height: '100%' }}>
			<Info />
			<Box
				sx={{
					display: 'flex',
					borderRadius: '10px',
					color: 'white',
					gap: '32px',
					m: 1,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						p: '20px',
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
				<Box
					sx={{
						background: theme.palette.background.lightGray,
						borderRadius: '10px',
						height: '214px',
						padding: '20px',
					}}
				>
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
								sx={{
									fontSize: '12px',
									fontWeight: 500,
									'& .MuiOutlinedInput-notchedOutline': {
										border: 'none',
									},
									'&:hover .MuiOutlinedInput-notchedOutline': {
										border: 'none',
									},
									'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
										border: 'none',
									},
								}}
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
			</Box>
			<Box
				sx={{
					display: 'flex',
					borderRadius: '10px',
					color: 'white',
					gap: '32px',
					marginTop: '24px',
					fontFamily: theme.typography,
				}}
			>
				<Box
					sx={{
						borderRadius: '10px',
						height: '214px',
						padding: '8px',
						width: '100%',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								width: '100%',
								marginBottom: 2,
							}}
						>
							<Typography
								sx={{
									color: 'black',
									fontSize: '24px',
									fontWeight: 600,
									fontFamily: theme.Typography,
								}}
							>
								Monthly Mentors
							</Typography>
							<MobileStepper
								maxSteps={3}
								position='static'
								activeStep={activeStep}
								nextButton={
									<Box
										size='small'
										onClick={handleNext}
										disabled={activeStep === maxSteps - 1}
										sx={{ fontSize: '18px', cursor: 'pointer' }}
									>
										<SlArrowRight />
									</Box>
								}
								backButton={
									<Box
										size='small'
										onClick={handleBack}
										disabled={activeStep === 0}
										sx={{ fontSize: '18px', cursor: 'pointer' }}
									>
										<SlArrowLeft />
									</Box>
								}
								sx={{
									background: 'inherit',
									'& .MuiMobileStepper-dots': {
										display: 'none',
									},
									gap: 2,
								}}
							/>
						</Box>
						<Box>
							<Paper elevation={0} sx={{ background: 'inherit' }}>
								<Slide direction='left' in={true}>
									<Box sx={{ display: 'flex', gap: '32px' }}>
										<Card sx={{ minWidth: '328px' }}>
											<Box
												sx={{
													display: 'flex',
													justifyContent: 'space-between',
													alignItems: 'center',
												}}
											>
												<CardHeader
													avatar={<Avatar aria-label='recipe ' src='/images/users/user1.jpg' />}
													title='Curious George'
													subheader='UI UX Design'
												/>
												<CardActions disableSpacing>
													<IconButton
														aria-label='follow'
														sx={{
															color: theme.palette.text.purpleDark,
															fontSize: '14px',
															fontWeight: 500,
															'&:hover': {
																background: 'none',
															},
															fontFamily: theme.typography,
														}}
													>
														+ Follow
													</IconButton>
												</CardActions>
											</Box>
											<CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
												<Box
													sx={{
														display: 'flex',
														alignItems: 'center',
														gap: 1,
													}}
												>
													<Typography sx={{ fontSize: '20px', textAlign: 'center' }}>
														<GoTasklist />
													</Typography>
													<Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
														40 Task
													</Typography>
												</Box>
												<Box
													sx={{
														display: 'flex',
														alignItems: 'center',
														gap: 1,
													}}
												>
													<Typography
														sx={{ fontSize: '20px', textAlign: 'center', fill: 'yellow' }}
													>
														<FaStar fill='gold' />
													</Typography>
													<Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
														4,7 (750 Reviews)
													</Typography>
												</Box>
											</CardContent>
										</Card>
										<Card sx={{ minWidth: '328px' }}>
											<Box
												sx={{
													display: 'flex',
													justifyContent: 'space-between',
													alignItems: 'center',
												}}
											>
												<CardHeader
													avatar={<Avatar aria-label='recipe ' src='/images/users/user1.jpg' />}
													title='Curious George'
													subheader='UI UX Design'
												/>
												<CardActions disableSpacing>
													<IconButton
														aria-label='follow'
														sx={{
															color: theme.palette.text.purpleDark,
															fontSize: '14px',
															fontWeight: 500,
															'&:hover': {
																background: 'none',
															},
															fontFamily: theme.typography,
														}}
													>
														+ Follow
													</IconButton>
												</CardActions>
											</Box>
											<CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
												<Box
													sx={{
														display: 'flex',
														alignItems: 'center',
														gap: 1,
													}}
												>
													<Typography sx={{ fontSize: '20px', textAlign: 'center' }}>
														<GoTasklist />
													</Typography>
													<Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
														40 Task
													</Typography>
												</Box>
												<Box
													sx={{
														display: 'flex',
														alignItems: 'center',
														gap: 1,
													}}
												>
													<Typography
														sx={{ fontSize: '20px', textAlign: 'center', fill: 'yellow' }}
													>
														<FaStar fill='gold' />
													</Typography>
													<Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
														4,7 (750 Reviews)
													</Typography>
												</Box>
											</CardContent>
										</Card>
										<Card sx={{ minWidth: '328px' }}>
											<Box
												sx={{
													display: 'flex',
													justifyContent: 'space-between',
													alignItems: 'center',
												}}
											>
												<CardHeader
													avatar={<Avatar aria-label='recipe ' src='/images/users/user1.jpg' />}
													title='Curious George'
													subheader='UI UX Design'
												/>
												<CardActions disableSpacing>
													<IconButton
														aria-label='follow'
														sx={{
															color: theme.palette.text.lightBlue,
															fontSize: '14px',
															fontWeight: 500,
															'&:hover': {
																background: 'none',
															},
															fontFamily: theme.typography,
														}}
													>
														Followed
													</IconButton>
												</CardActions>
											</Box>
											<CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
												<Box
													sx={{
														display: 'flex',
														alignItems: 'center',
														gap: 1,
													}}
												>
													<Typography sx={{ fontSize: '20px', textAlign: 'center' }}>
														<GoTasklist />
													</Typography>
													<Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
														40 Task
													</Typography>
												</Box>
												<Box
													sx={{
														display: 'flex',
														alignItems: 'center',
														gap: 1,
													}}
												>
													<Typography
														sx={{ fontSize: '20px', textAlign: 'center', fill: 'yellow' }}
													>
														<FaStar fill='gold' />
													</Typography>
													<Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
														4,7 (750 Reviews)
													</Typography>
												</Box>
											</CardContent>
										</Card>
									</Box>
								</Slide>
							</Paper>
						</Box>
					</Box>
				</Box>
			</Box>
		</BoxRoot>
	);
};

export default Dashboard;
