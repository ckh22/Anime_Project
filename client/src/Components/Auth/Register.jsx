// Dependencies Imports
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

// Material UI Core Imports
import { makeStyles } from '@material-ui/core/styles';
import {
	Avatar,
	Button,
	TextField,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	Link,
	Grid,
	Box,
	Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// Components Imports
import Loader from '../Loader/Loader';

// Actions Imports
import { register } from '../../redux/actions/userActions';

// Styles
import './scss/Register.css';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}{' '}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
		// border: '1px solid red',
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	textField: {
		width: '100%',
	},
}));

const Register = ({ location, history }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);
	const [values, setValues] = useState({
		showPassword: false,
		showConfirmPassword: false,
	});

	// Redux
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);

	// Deconstructing userLogin data
	const { loading, error, userInfo } = userLogin;

	// React Router Dom
	let { from } = location.state || { from: { pathname: '/' } };
	const redirect = location.search ? location.search.split('=')[1] : '/animes';

	// Show Password
	const handleShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	// Show Confirm Password
	const handleShowConfirmPassword = () => {
		setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
	};

	// Prevent Mousedown Default Event
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const submitHandler = (e) => {
		e.preventDefault();
		// console.log(userName, email, password, firstName, lastName);
		if (password !== confirmPassword) {
			setMessage('Passwords do not match');
		} else {
			dispatch(register(firstName, lastName, userName, email, password));
			history.replace(from);
		}

		//console.log(email, password);
		// console.log('Redirection: ' + redirection);
	};

	// Material UI Core
	const classes = useStyles();

	useEffect(() => {
		// If User Data exists on the state
		if (userInfo) {
			// Redirect them to /animes
			history.push(redirect);
		}
		//console.log('Redirection: ' + redirect);
	}, [history, userInfo, redirect]);

	return (
		<>
			<div className="register_container">
				<div className="register_card">
					{loading ? (
						<Loader />
					) : (
						<div>
							<Avatar className={classes.avatar} style={{ textAlign: 'center', margin: '0 auto' }}>
								<LockOutlinedIcon />
							</Avatar>
							<Typography
								component="h1"
								variant="h5"
								style={{
									textAlign: 'center',
									paddingTop: '10px',
									color: 'black',
								}}
							>
								Sign up
							</Typography>

							<form onSubmit={submitHandler} className={classes.form} noValidate>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6}>
										<TextField
											error={error ? true : false}
											autoComplete="fname"
											name="firstName"
											variant="outlined"
											required
											fullWidth
											id="firstName"
											label="First Name"
											autoFocus
											onChange={(e) => setFirstName(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											error={error ? true : false}
											variant="outlined"
											required
											fullWidth
											id="lastName"
											label="Last Name"
											name="lastName"
											autoComplete="lname"
											onChange={(e) => setLastName(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											error={error ? true : false}
											variant="outlined"
											required
											fullWidth
											id="userName"
											label="Username"
											name="userName"
											autoComplete="uname"
											onChange={(e) => setUserName(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											error={error ? true : false}
											variant="outlined"
											required
											fullWidth
											id="email"
											label="Email Address"
											name="email"
											autoComplete="email"
											onChange={(e) => setEmail(e.target.value)}
										/>
									</Grid>
									<Grid item xs={12}>
										<FormControl
											className={clsx(classes.textField, classes.form)}
											variant="outlined"
										>
											<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
											<OutlinedInput
												required
												error={error ? true : false}
												id="outlined-adornment-password"
												type={values.showPassword ? 'text' : 'password'}
												value={values.password}
												onChange={(e) => setPassword(e.target.value)}
												endAdornment={
													<InputAdornment position="end">
														<IconButton
															aria-label="toggle password visibility"
															onClick={handleShowPassword}
															onMouseDown={handleMouseDownPassword}
															edge="end"
														>
															{values.showPassword ? <Visibility /> : <VisibilityOff />}
														</IconButton>
													</InputAdornment>
												}
												labelWidth={70}
												fullWidth
											/>
										</FormControl>
									</Grid>
									<Grid item xs={12}>
										<FormControl
											className={clsx(classes.textField, classes.form)}
											variant="outlined"
										>
											<InputLabel htmlFor="outlined-adornment-password">
												Confirm Password
											</InputLabel>
											<OutlinedInput
												required
												error={message ? true : false}
												helperText={message}
												id="outlined-adornment-password"
												type={values.showConfirmPassword ? 'text' : 'password'}
												value={values.confirmPassword}
												onChange={(e) => setConfirmPassword(e.target.value)}
												endAdornment={
													<InputAdornment position="end">
														<IconButton
															aria-label="toggle password visibility"
															onClick={handleShowConfirmPassword}
															onMouseDown={handleMouseDownPassword}
															edge="end"
														>
															{values.showConfirmPassword ? (
																<Visibility />
															) : (
																<VisibilityOff />
															)}
														</IconButton>
													</InputAdornment>
												}
												labelWidth={135}
												fullWidth
											/>
										</FormControl>
									</Grid>
								</Grid>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
								>
									Sign Up
								</Button>
								<Grid container justify="flex-end">
									<Grid item>
										<Link component={RouterLink} to="/login">
											Already have an account? Sign in
										</Link>
									</Grid>
								</Grid>
							</form>
						</div>
					)}
				</div>
				<Box mt={5}>
					<Copyright />
				</Box>
			</div>
		</>
	);
};

export default Register;
