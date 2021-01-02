import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	BasicWrapper: {
		width: '100%',
	},
	MutedText: {
		color: '#666666',
		fontWeight: 'bold',
		marginTop: '1rem',
	},
	Text: {
		fontWeight: 500,
		color: '#000',
	},
	Create: {
		textAlign: 'right',
		color: '#666',
	},
}));

function Basic({ user }) {
	const classes = useStyles();
	return (
		<div className={classes.BasicWrapper}>
			<div className={classes.MutedText}>Full Name</div>
			<div className={classes.Text}>{user.firstName + ' ' + user.middleName + ' ' + user.lastName}</div>
			<div className={classes.MutedText}>ID</div>
			<div className={classes.Text}>{user.id}</div>
			<div className={classes.MutedText}>Mobile</div>
			<div className={classes.Text}>{user.mobile}</div>
			<div className={classes.MutedText}>Email</div>
			<div className={classes.Text}>{user.mobile}</div>
			<div className={classes.Create}>
				<IconButton>
					<CreateIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default Basic;
