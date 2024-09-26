import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import CardButton from '../button';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	borderRadius: '10px',
};

export default function TransitionsModal() {
	const [open, setOpen] = React.useState(false);

	console.log(open);

	return (
		<div>
			<CardButton
				text='Go To Help Center'
				className='button'
				sx={{ zIndex: 100 }}
				onClick={() => setOpen(true)}
			/>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				onClose={() => setOpen(false)}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<Typography
							id='transition-modal-title'
							variant='h6'
							component='h2'
							sx={{ textAlign: 'center' }}
						>
							Help Center
						</Typography>
						<Typography id='transition-modal-description' sx={{ mt: 2, textAlign: 'center' }}>
							If you have any question or want to connect to us, you can send email to :
						</Typography>
						<Typography
							id='transition-modal-description'
							sx={{
								mt: 2,
								textAlign: 'center',
								background: 'orangered',
								padding: '0.5rem',
								borderRadius: '10px',
							}}
						>
							p.r.7.norouzi@gmail.com
						</Typography>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
