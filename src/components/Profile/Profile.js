import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Basic from './Basic';
import Bank from './Bank';
import DematDetails from './DematDetails';
import KYCDocument from './KYCDocument';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	Accordion: {
		marginBottom: '1rem',
		borderRadius: '.41rem',
	},
	heading: {
		// fontSize: theme.typography.pxToRem(15),
		fontSize: '1.5rem',
		flexBasis: '90.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	DotSuccess: {
		display: 'inline-block',
		width: '15px',
		height: '15px',
		borderRadius: '50%',
		background: 'green',
	},
	DotDanger: {
		display: 'inline-block',
		width: '15px',
		height: '15px',
		borderRadius: '50%',
		background: 'red',
	},
	ExpandIcon: {
		fontSize: '38px',
	},
}));

function Profile() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	const user = {
		id: '123123123123',
		firstName: 'First name',
		middleName: 'Middle name',
		lastName: 'LastName',
		mobile: '+919898298392',
		email: 'longemailidbeforedomain@longdomainme.in',
	};
	return (
		<div className={classes.root}>
			<h1>Profile</h1>
			<Accordion className={classes.Accordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon className={classes.ExpandIcon} />} aria-controls='panel1bh-content' id='panel1bh-header'>
					<Typography className={classes.heading}>Basic</Typography>
					<Typography className={classes.secondaryHeading}>
						<span className={classes.DotSuccess}></span>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Basic user={user} />
				</AccordionDetails>
			</Accordion>
			<Accordion className={classes.Accordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon className={classes.ExpandIcon} />} aria-controls='panel2bh-content' id='panel2bh-header'>
					<Typography className={classes.heading}>Bank</Typography>
					<Typography className={classes.secondaryHeading}>
						<span className={classes.DotDanger}></span>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Bank user={user} />
				</AccordionDetails>
			</Accordion>
			<Accordion className={classes.Accordion} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon className={classes.ExpandIcon} />} aria-controls='panel3bh-content' id='panel3bh-header'>
					<Typography className={classes.heading}>Demat Details</Typography>
					<Typography className={classes.secondaryHeading}>
						<span className={classes.DotDanger}></span>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<DematDetails />
				</AccordionDetails>
			</Accordion>
			<Accordion className={classes.Accordion} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon className={classes.ExpandIcon} />} aria-controls='panel4bh-content' id='panel4bh-header'>
					<Typography className={classes.heading}>KYC Documents</Typography>
					<Typography className={classes.secondaryHeading}>
						<span className={classes.DotDanger}></span>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<KYCDocument user={user} />
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default Profile;
