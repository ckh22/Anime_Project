// Dependencies Imports
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import clsx from 'clsx';

// Material UI Core Imports
import { makeStyles } from '@material-ui/core/styles';
import {
	Avatar,
	Button,
	Dialog,
	TextField,
	FormControlLabel,
	Checkbox,
	Grid,
	Box,
	Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// Components Imports
import Message from '../Message/Message';
import Loader from '../Loader/Loader';

// Actions Imports
import { login } from '../../redux/actions/userActions';

// Copy Right Function
function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<RouterLink component={RouterLink} to="/">
				AnimeCenter
			</RouterLink>{' '}
			{new Date().getFullYear()}
			{'.'}{' '}
		</Typography>
	);
}

// Material UI Core Styles
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

const Login = ({ open, setOpen }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [values, setValues] = useState({
		showPassword: false,
	});

	// Redux
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);

	// Decontructured userLogin data
	const { loading, error } = userLogin;

	// useEffect(() => {
	// 	if (userInfo) {
	// 		history.push(redirect);
	// 	}
	// }, [history, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
		//console.log(email, password);
		//handleClose();
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
		console.log(values.showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const setEmailHandler = (e) => {
		setEmail(e.target.value);
		// console.log(location);
	};

	const setPasswordHandler = (e) => {
		setPassword(e.target.value);
	};

	const classes = useStyles();

	// useEffect(() => {
	// 	if (userInfo) {
	// 		history.push(redirect);
	// 	}
	// }, [history, userInfo, redirect]);

	return (
		<div>
			<Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
				<div style={{ padding: '100px' }} className={classes.root}>
					{error && <Message variant="error">{error}</Message>}
					{loading && <Loader />}

					<Avatar className={classes.avatar} style={{ margin: '0 auto' }}>
						<LockOutlinedIcon />
					</Avatar>

					<Typography component="h1" variant="h5" style={{ textAlign: 'center', paddingTop: '10px' }}>
						Sign in
					</Typography>

					<form onSubmit={submitHandler} className={classes.form} noValidate>
						<TextField
							id="outlined-error-helper-text"
							helperText="Invalid email"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							onChange={setEmailHandler}
						/>

						<FormControl className={clsx(classes.textField, classes.form)} variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? 'text' : 'password'}
								value={values.password}
								onChange={setPasswordHandler}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
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

						<hr />

						<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />

						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
							Sign In
						</Button>

						<Grid container>
							<Grid item xs>
								<Button component={RouterLink} to="/login" variant="contained">
									Forgot password?
								</Button>
							</Grid>

							<Grid item>
								<Button component={RouterLink} to="/register" variant="contained">
									{"Don't have an account? Sign Up"}{' '}
								</Button>
							</Grid>
						</Grid>
					</form>
				</div>
				<Box mt={8}>
					<Copyright />
				</Box>
			</Dialog>
		</div>
	);
};

export default Login;


	/* <TextField
							error
							id="outlined-error-helper-text"
							label={error}
							helperText="Invalid email"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							error
							id="outlined-error-helper-text"
							helperText="Please re-enter password"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/> */
