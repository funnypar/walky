/* eslint-disable react/prop-types */
import { alpha, InputBase, styled } from '@mui/material';
import { CiSearch } from 'react-icons/ci';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	border: '1px solid',
	display: 'flex',
	borderColor: theme.palette.background.lightGray,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '33%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: '33%',
	},
}));

const SearchIconWrapper = styled('div')(() => ({
	paddingRight: '14px',
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	right: 0,
	fontSize: '20px',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	fontSize: '12px',
	fontWeight: 400,
	color: 'inherit',
	width: '100%',
	'& .MuiInputBase-input': {
		padding: '14px, 28px, 14px, 28px',
		// vertical padding + font size from searchIcon
		paddingLeft: '1em',
		transition: theme.transitions.create('width'),
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

const SearchBar = ({ title }) => {
	return (
		<Search>
			<SearchIconWrapper>
				<CiSearch />
			</SearchIconWrapper>
			<StyledInputBase placeholder={title} inputProps={{ 'aria-label': 'search' }} />
		</Search>
	);
};

export default SearchBar;
