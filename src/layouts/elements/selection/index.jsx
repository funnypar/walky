/* eslint-disable react/prop-types */
import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import { FaRegCircle, FaRegDotCircle } from 'react-icons/fa';
import FormGroupRoot from './style.module';

const Selection = ({ title }) => {
	const [selected, setSelected] = useState(1);
	const theme = useTheme();

	return (
		<FormGroupRoot>
			<Typography sx={{ fontFamily: theme.typography, fontSize: '14px', fontWeight: 600 }}>
				{title}
			</Typography>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<FormControlLabel
					id={1}
					control={
						<Checkbox
							defaultChecked
							icon={<FaRegCircle />}
							checkedIcon={<FaRegDotCircle />}
							size='large'
							checked={selected == 1 ? true : false}
						/>
					}
					label='24 Hours'
					labelPlacement='start'
					sx={{
						fontFamily: theme.typography,
					}}
					className={`${selected == 1 ? 'active' : ''}`}
					onClick={() => setSelected(1)}
				/>
				<FormControlLabel
					id={2}
					control={
						<Checkbox
							icon={<FaRegCircle />}
							checkedIcon={<FaRegDotCircle />}
							size='large'
							checked={selected == 2 ? true : false}
						/>
					}
					label='12 Hours'
					labelPlacement='start'
					sx={{ fontFamily: theme.typography }}
					className={`${selected == 2 ? 'active' : ''}`}
					onClick={() => setSelected(2)}
				/>
			</Box>
		</FormGroupRoot>
	);
};

export default Selection;
