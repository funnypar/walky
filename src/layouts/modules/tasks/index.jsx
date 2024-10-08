/* eslint-disable react/prop-types */
import { useTheme } from '@emotion/react';
import { Box, MobileStepper, Paper, Slide, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import getAllTasks from '../../../utils/service/getAllTasks';
import Spinner from '../../elements/spinner';
import Card from './components/card';
import BoxRoot from './style.module';

const Tasks = ({ title, sx }) => {
	const theme = useTheme();
	const { data: tasks, isLoading } = useQuery({
		queryFn: () => getAllTasks(),
		queryKey: ['tasks'],
	});

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
		<BoxRoot sx={{ ...sx }}>
			<Box className='header'>
				<Typography
					sx={{
						color: 'black',
						fontSize: '24px',
						fontWeight: 600,
						fontFamily: theme.Typography,
					}}
				>
					{title}
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
						<Box sx={{ display: 'flex', gap: '32px', borderRadius: '10px' }}>
							{isLoading ? (
								<Spinner />
							) : (
								tasks?.map((el, index) => {
									return <Card datas={el} key={index} />;
								})
							)}
						</Box>
					</Slide>
				</Paper>
			</Box>
		</BoxRoot>
	);
};

export default Tasks;
