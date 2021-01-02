import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { FormControlLabel, Link, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import ClearIcon from '@material-ui/icons/Clear';
import { SwipeableDrawer } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	AddBtn: {
		textAlign: 'center',
		color: '#1d28ea',
		cursor: 'pointer',
		fontSize: '22px',
		fontWeight: 'bold',
	},
	list: {
		width: 250,
	},
	fullList: {
		width: '100%',
	},
	BtnWrapper: {
		margin: '1rem',
		textAlign: 'center',
	},
	InputField: {
		marginBottom: '1rem',
		'& div': {
			width: '100%',
		},
	},
	label: {
		// margin: '1rem 0',
		fontSize: '1rem',
		lineHeight: '1.5rem',
		// textAlign: 'justify',
	},
	CustomBtn: {
		width: '100%',
		padding: '1rem ',
		fontSize: '22px',
	},
	DrawerContent: {},
	DrawerHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '1rem',
		borderBottom: '1px solid #000',
		'& h2': {
			margin: '.2rem 0',
		},
	},
	Content: {
		margin: '1rem 2rem',
		boxShadow: '0 0 10px #ccc',
		borderRadius: '5px',
	},
	PANDeails: {
		background: '#3f51b5',
		padding: '1rem',
		color: '#fff',
		borderRadius: '5px',
	},
	UserDetails: {
		padding: '1rem',
	},
	ConfirmCheck: {
		padding: '.5rem 3rem',
	},
	ConfirmCheckDesc: {
		padding: '.5rem 1rem',
		'& p': {
			margin: '.2rem',
			marginBottom: '.5rem',
		},
	},
	PanFail: {
		padding: '1rem 2rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& svg': {
			color: 'red',
			fontSize: '72px',
		},
	},
	FailedMsg: {
		display: 'flex',
		flexDirection: 'column',
	},
	FailedDesc: {
		padding: '1rem',
	},
	PanSuccess: {
		padding: '1rem 2rem',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		'& svg': {
			color: 'green',
			fontSize: '72px',
		},
	},
}));

const GreenCheckbox = withStyles({
	root: {
		color: green[400],
		'&$checked': {
			color: green[600],
		},
	},
	checked: {},
})((props) => <Checkbox color='default' {...props} />);

function KYCDocument({ user }) {
	const classes = useStyles();
	const [showDrawer, setShowDrawer] = React.useState(false);
	const [panConfrim, setPanConfirm] = React.useState(false);

	const [panForm, setPanFrom] = React.useState({
		pan: '',
		dob: '',
		agreement: false,
		confirmName: false,
	});
	const toggleDrawer = (open) => (event) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setShowDrawer(open);
	};

	const handlePanFormChange = (e) => {
		const { value, name, checked, type } = e.target;
		if (type === 'checkbox') {
			console.log(value, name, checked, type);
			setPanFrom((prevState) => ({
				...prevState,
				[name]: checked,
			}));
		} else {
			setPanFrom((prevState) => ({
				...prevState,
				[name]: value,
			}));
		}
	};

	const handleCheckPan = () => {
		setPanConfirm(true);
	};
	const handleComplete = () => {
		setPanFrom({
			pan: '',
			dob: '',
			agreement: false,
			confirmName: false,
		});
		toggleDrawer(false);
		setPanConfirm(false);
		setShowDrawer(false);
	};
	return (
		<div className={classes.root}>
			<div className={classes.KYCForm}>
				<div className={classes.InputField}>
					<TextField id='standard-basic' name='pan' value={panForm.pan} onChange={handlePanFormChange} label='Enter PAN' />
				</div>
				<div className={classes.InputField}>
					<TextField
						type='date'
						id='date'
						name='dob'
						onChange={handlePanFormChange}
						defaultValue={panForm.dob}
						label='Date of Birth'
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</div>
				<div className={classes.InputField}>
					<FormControlLabel
						classes={{ label: classes.label }}
						name='agreement'
						onChange={handlePanFormChange}
						checked={panForm.agreement}
						control={<GreenCheckbox icon={<CheckBoxOutlineBlankIcon />} checkedIcon={<i className='fa fa-check-square-o'></i>} name='agreement' />}
						label='I give my consent to fetch my KYC information from my PAN for the purpose of onboarding & verification.'
					/>
				</div>
				<div className={classes.InputField}>
					<Button disabled={!panForm.agreement} onClick={() => setShowDrawer(true)} className={classes.CustomBtn} variant='contained' color='primary'>
						Verify
					</Button>
				</div>
			</div>

			<SwipeableDrawer anchor='bottom' open={showDrawer} onClose={toggleDrawer(false)}>
				<div className={classes.fullList} role='presentation'>
					<div className={classes.DrawerContent}>
						<div className={classes.DrawerHeader}>
							<h2>Verify Pan</h2>
							<span onClick={toggleDrawer(false)}>
								<ClearIcon />
							</span>
						</div>

						<div className={classes.Content}>
							<div className={classes.PANDeails}>
								<div>
									<span>PAN : </span>
									<span>{panForm.pan}</span>
								</div>
								<div>
									<span>DOB : </span>
									<span>{panForm.dob}</span>
								</div>
							</div>
							<div className={classes.UserDetails}>
								<div>
									<span>Name : </span>
									<span>{user.firstName + ' ' + user.lastName}</span>
								</div>
								<div>
									<span>PAN Status : </span>
									<span style={{ color: 'green' }}>Valid</span>
								</div>
								<div>
									<span>Category : </span>
									<span>Individual</span>
								</div>
							</div>
						</div>
						{!panConfrim ? (
							<>
								<div className={classes.ConfirmCheck}>
									<FormControlLabel
										classes={{ label: classes.label }}
										name='confirmName'
										onChange={handlePanFormChange}
										checked={panForm.confirmName}
										control={<GreenCheckbox icon={<CheckBoxOutlineBlankIcon />} checkedIcon={<i className='fa fa-check-square-o'></i>} name='confirmName' />}
										label='I confirm that my name as per PAN shown above is correct. '
									/>
								</div>
								<div className={classes.ConfirmCheckDesc}>
									<p>If the name shown above is incorrect, re-check the PAN & DOB entered by you. </p>
									<p>
										If still the details are incorrect, <Link to='/'>click here</Link> to report.
									</p>
								</div>
								<div className={classes.ConfrimBtn}>
									<Button disabled={!panForm.confirmName} variant='contained' onClick={handleCheckPan} color='primary' className={classes.CustomBtn}>
										Confirm
									</Button>
								</div>
							</>
						) : panForm.pan.length > 0 ? (
							<>
								<div className={classes.PanSuccess}>
									<DoneIcon />
									<span style={{ color: '#999999' }}>PAN has been added sucessfully.</span>
								</div>
								<div className={classes.DoneBtn}>
									<Button onClick={handleComplete} variant='contained' color='primary' className={classes.CustomBtn}>
										Done
									</Button>
								</div>
							</>
						) : (
							<>
								<div className={classes.PanFail}>
									<ClearIcon />
									<div className={classes.FailedMsg}>
										<span>Couldn't verify PAN</span>
										<span style={{ color: 'red' }}>Invalid PAN, Please re-check the entered PAN / DOB</span>
									</div>
								</div>
								<div className={classes.FailedDesc}>
									<p>
										If you think that this is an error, <Link to='/'>click here</Link> to correct.
									</p>
								</div>
								<div className={classes.DoneBtn}>
									<Button variant='contained' onClick={handleComplete} color='primary' className={classes.CustomBtn}>
										Done
									</Button>
								</div>
							</>
						)}
					</div>
				</div>
			</SwipeableDrawer>
		</div>
	);
}

export default KYCDocument;
