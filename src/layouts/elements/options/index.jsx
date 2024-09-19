/* eslint-disable react/prop-types */
import { useTheme } from '@emotion/react';
import { FormControl, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import { useState } from 'react';

function getStyles(name, personName, theme) {
	return {
		fontWeight: personName.includes(name)
			? theme.typography.fontWeightMedium
			: theme.typography.fontWeightRegular,
	};
}

const Options = ({ title, items }) => {
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	const theme = useTheme();
	const [personName, setPersonName] = useState([]);

	const handleChange = event => {
		const {
			target: { value },
		} = event;
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value,
		);
	};

	return (
		<div>
			<FormControl
				sx={{ m: 1, width: 300, mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}
			>
				<Typography sx={{ fontFamily: theme.typography, fontSize: '14px', fontWeight: 600 }}>
					{title}
				</Typography>
				<Select
					multiple
					displayEmpty
					value={personName}
					onChange={handleChange}
					input={<OutlinedInput />}
					renderValue={selected => {
						if (selected.length === 0) {
							return <em>English (Default)</em>;
						}

						return selected.join(', ');
					}}
					MenuProps={MenuProps}
					inputProps={{ 'aria-label': 'Without label' }}
				>
					<MenuItem disabled value=''>
						<em>English (Default) </em>
					</MenuItem>
					{items.map(name => (
						<MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
							{name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default Options;
