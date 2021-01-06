import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link as RouterLink } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Message from '../Message/Message';
import Loader from '../Loader/Loader';

import { login } from '../../redux/actions/userActions';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link component={RouterLink} to="/">
				AnimeCenter
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}{' '}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const Login = ({ open, setOpen, location, history }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	// This is for adding pagination to anime main homepage
	// const redirect = location.search ? location.search.split('=')[1] : '/';

	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;

	// useEffect(() => {
	// 	if (userInfo) {
	// 		history.push(redirect);
	// 	}
	// }, [history, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};

	const handleClose = () => {
		setOpen(false);
	};
	const classes = useStyles();
	return (
		<div>
			<Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
				<div style={{ padding: '100px' }}>
					<Avatar className={classes.avatar} style={{ margin: '0 auto' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5" style={{ textAlign: 'center', paddingTop: '10px' }}>
						Sign in
					</Typography>

					<form onSubmit={submitHandler} className={classes.form} noValidate>
						<TextField
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
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}{' '}
								</Link>
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
