import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	TopMenuBar: {
		background: '#fff',
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: '#999999',
		'& svg': {
			fontSize: '2rem',
		},
		'@media (max-width:787px)': {
			marginRight: 0,
			padding: '.2rem',
		},
	},
	MenuName: {
		color: '#999999',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& svg': {
			fontSize: '2rem',
		},
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},

	MenuIconBtn: {
		color: '#1d28ea',
	},
}));

export default function PrimarySearchAppBar() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={menuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMenuOpen} onClose={handleMenuClose}>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar className={classes.TopMenuBar} position='static'>
				<Toolbar>
					<IconButton edge='start' className={classes.menuButton} aria-label='open drawer'>
						<MenuIcon className={classes.MenuIconBtn} />
					</IconButton>
					<span className={classes.MenuName}>
						<ImageOutlinedIcon /> <span>Partener's Name</span>
					</span>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<IconButton className={classes.menuButton} aria-label=''>
							<SearchIcon />
						</IconButton>
						<IconButton className={classes.menuButton} aria-label=''>
							<NotificationsNoneIcon />
						</IconButton>
						<IconButton className={classes.menuButton} edge='end' aria-label='account of current user' aria-controls={menuId} aria-haspopup='true' onClick={handleProfileMenuOpen}>
							<PersonIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMenu}
		</div>
	);
}
