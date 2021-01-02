import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { FormControl, Card, FormControlLabel, IconButton, Input, InputAdornment, InputLabel, Link, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import ClearIcon from '@material-ui/icons/Clear';
import { SwipeableDrawer } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import DoneIcon from '@material-ui/icons/Done';

const GreenCheckbox = withStyles({
	root: {
		color: green[400],
		'&$checked': {
			color: green[600],
		},
	},
	checked: {},
})((props) => <Checkbox color='default' {...props} />);

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
	BtnWrapper: {
		margin: '1rem',
		textAlign: 'center',
	},
	list: {
		width: 250,
	},
	fullList: {
		width: '100%',
	},
	InputField: {
		marginBottom: '1rem',
		'& div': {
			width: '100%',
		},
	},
	ControlField: {
		marginBottom: '1rem',
		'& div:first-child': {
			width: '100%',
		},
	},
	OTPField: {
		'& label': {
			fontSize: '40px',
			margin: '-1rem 0',
		},
		marginBottom: '2rem',
	},
	BankForm: {
		padding: '1rem',
		margin: '1rem',
		boxShadow: '0 0 10px #ccc',
		borderRadius: '10px',
	},
	BankDetails: {
		margin: '1rem 0',
	},
	BankDetailsNext: {
		margin: '1rem ',
	},
	InputDesc: {
		padding: '.5rem',
		margin: '1rem',
		border: '1px solid blue',
		borderRadius: '5px',
		'& p': {
			margin: '0',
			color: '#999',
		},
	},
	ConfirmCheck: {
		margin: '1rem 3rem',
	},
	label: {
		// margin: '1rem 0',
		fontSize: '1rem',
		lineHeight: '1rem',
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
		boxShadow: '0 0 5px #ccc',
		borderRadius: '5px',
	},
	OTPDetails: {
		color: '#999',
		wordBreak: ' break-all',
	},
	BankSuccess: {
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

function Bank({ user }) {
	const classes = useStyles();
	const [showDrawer, setShowDrawer] = React.useState(false);
	const [verifyBank, setVerifyBank] = React.useState(false);
	const [account, setAccount] = React.useState(false);
	const toggleDrawer = (open) => (event) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setShowDrawer(open);
	};
	const [bankForm, setBankForm] = React.useState({
		ifscCode: '',
		accountNumber: '',
		confirmAccount: false,
		otp: '',
	});
	const handleBankFormChange = (e) => {
		const { value, name, checked, type } = e.target;
		if (type === 'checkbox') {
			console.log(value, name, checked, type);
			setBankForm((prevState) => ({
				...prevState,
				[name]: checked,
			}));
		} else {
			setBankForm((prevState) => ({
				...prevState,
				[name]: value,
			}));
		}
	};

	const verifyBankAccount = () => {
		setVerifyBank(true);
	};

	const addBankAccount = () => {
		setAccount(true);
	};

	const handleComplete = () => {
		setBankForm({
			ifscCode: '',
			accountNumber: '',
			confirmAccount: false,
			otp: '',
		});
		toggleDrawer(false);
		setAccount(false);
		setShowDrawer(false);
		setVerifyBank(false);
	};

	return (
		<div className={classes.root}>
			<div className={classes.BtnWrapper}>
				<Button onClick={toggleDrawer(true)} className={classes.AddBtn}>
					+ Add Bank
				</Button>
			</div>

			<SwipeableDrawer anchor='bottom' open={showDrawer} onClose={toggleDrawer(false)}>
				<div className={classes.fullList} role='presentation'>
					<div className={classes.DrawerContent}>
						<div className={classes.DrawerHeader}>
							<h2>Add Bank</h2>
							<span onClick={toggleDrawer(false)}>
								<ClearIcon />
							</span>
						</div>

						<div className={classes.BankContent}>
							{!verifyBank ? (
								<>
									<div className={classes.InputDesc}>
										<p>You can only add bank accounts that belongs to you. Either where you are the single user or in case of a joint account you should be the first holder</p>
									</div>
									<div className={classes.BankForm}>
										<div className={classes.ControlField}>
											<FormControl>
												<InputLabel htmlFor='ifscCode'>Enter Your Bank's IFSC code</InputLabel>
												<Input
													id='ifscCode'
													type='text'
													name='ifscCode'
													onChange={handleBankFormChange}
													value={bankForm.ifscCode}
													endAdornment={
														<InputAdornment position='end'>
															<IconButton aria-label='ifsc code'>
																<InfoIcon style={{ color: '#1d28ea' }} />
															</IconButton>
														</InputAdornment>
													}
												/>
											</FormControl>
										</div>
										<div className={classes.BankDetails}>
											<div>
												<span>Bank Name : </span> <span>ShownbaseonIFSC</span>
											</div>
											<div>
												<span>Branch : </span> <span>ShownbaseonIFSC</span>
											</div>
										</div>
										<div className={classes.InputField}>
											<TextField type='text' onChange={handleBankFormChange} name='accountNumber' defaultValue={bankForm.accountNumber} label='Account Number' />
										</div>
									</div>

									<div className={classes.ConfirmBtnWrapper}>
										<Button onClick={verifyBankAccount} variant='contained' color='primary' className={classes.CustomBtn}>
											Verify Bank
										</Button>
									</div>
								</>
							) : account ? (
								<>
									<Card style={{ padding: '4rem  1rem' }}>
										<div className={classes.BankSuccess}>
											<DoneIcon />
											<span style={{ color: '#999999' }}>Bank account has been added sucessfully.</span>
										</div>
									</Card>
									<div className={classes.DoneBtn}>
										<Button onClick={handleComplete} variant='contained' color='primary' className={classes.CustomBtn}>
											Done
										</Button>
									</div>
								</>
							) : (
								<>
									<div className={classes.BankDetailsNext}>
										<Card style={{ padding: '1rem' }}>
											<div>
												<span>Name : </span>
												<span>{user.firstName + ' ' + user.lastName}</span>
											</div>
											<div>
												<span>Bank : </span>
												<span>Bank of India</span>
											</div>
											<div>
												<span>A/C : </span>
												<span>************1234</span>
											</div>
											<div>
												<span>Branch : </span>
												<span>Fort, Horniman Circle</span>
											</div>
										</Card>

										<div className={classes.ConfirmCheck}>
											<FormControlLabel
												classes={{ label: classes.label }}
												name='confirmAccount'
												onChange={handleBankFormChange}
												checked={bankForm.confirmAccount}
												control={<GreenCheckbox icon={<CheckBoxOutlineBlankIcon />} checkedIcon={<i className='fa fa-check-square-o'></i>} name='confirmAccount' />}
												label='I confirm that the above bank account belongs to me. '
											/>
										</div>

										<div className={classes.OTPDetails}>
											<p>Enter OTP sent to you via SMS on 9987876564 & via email on emailbeforedomainlongname@longdomainname.com</p>
										</div>
										<div className={[classes.InputField, classes.OTPField].join(' ')}>
											<TextField type='text' name='otp' defaultValue={bankForm.otp} label='Enter OTP' />
										</div>
									</div>

									<div className={classes.ConfirmBtnWrapper}>
										<Button onClick={addBankAccount} variant='contained' color='primary' className={classes.CustomBtn}>
											Add Bank
										</Button>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</SwipeableDrawer>
		</div>
	);
}

export default Bank;
