// Dependencies Imports
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';

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
import Link from '@material-ui/core/Link';
// import CssBaseline from '@material-ui/core/CssBaseline';

// Components Imports
// import Message from '../Message/Message';
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
	const { loading, error, userInfo } = userLogin;

	// React Router Dom
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: '/' } };
	const redirect = location.search ? location.search.split('=')[1] : '/animes';

	const handleClose = () => {
		setOpen(false);
	};

	// Showing Password
	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	// Prevent Mousedown Default Event
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
		console.log(error);
		if (!error) {
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
			<Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
				<div style={{ padding: '100px' }} className={classes.root}>
					<div>{loading && <Loader />}</div>
					<Avatar className={classes.avatar} style={{ margin: '0 auto' }}>
						<LockOutlinedIcon />
					</Avatar>

					<div>
						<Typography component="h1" variant="h5" style={{ textAlign: 'center', paddingTop: '10px' }}>
							Sign in
						</Typography>
					</div>

					<form onSubmit={submitHandler} className={classes.form} noValidate>
						<TextField
							error={error ? true : false}
							id="outlined-error-helper-text"
							helperText={error}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							onChange={(e) => setEmail(e.target.value)}
						/>

						<FormControl className={clsx(classes.textField, classes.form)} variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? 'text' : 'password'}
								value={values.password}
								onChange={(e) => setPassword(e.target.value)}
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

						<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />

						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
							Sign In
						</Button>

						<Grid container>
							<Grid item xs>
								<Link component={RouterLink} to="/login" color="secondary" variant="inherit">
									Forgot password?
								</Link>
							</Grid>

							<Grid item>
								<Link component={RouterLink} to="/register">
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
		</>
	);
};

export default Login;

// export default function AuthExample() {
// 	return (
// 		<ProvideAuth>
// 			<Router>
// 				<div>
// 					<AuthButton />

// 					<ul>
// 						<li>
// 							<Link to="/public">Public Page</Link>
// 						</li>
// 						<li>
// 							<Link to="/protected">Protected Page</Link>
// 						</li>
// 					</ul>

// 					<Switch>
// 						<Route path="/public">
// 							<PublicPage />
// 						</Route>
// 						<Route path="/login">
// 							<LoginPage />
// 						</Route>
// 						<PrivateRoute path="/protected">
// 							<ProtectedPage />
// 						</PrivateRoute>
// 					</Switch>
// 				</div>
// 			</Router>
// 		</ProvideAuth>
// 	);
// }

// const fakeAuth = {
// 	isAuthenticated: false,
// 	signin(cb) {
// 		fakeAuth.isAuthenticated = true;
// 		setTimeout(cb, 100); // fake async
// 	},
// 	signout(cb) {
// 		fakeAuth.isAuthenticated = false;
// 		setTimeout(cb, 100);
// 	},
// };

// const authContext = createContext();

// function ProvideAuth({ children }) {
// 	const auth = useProvideAuth();
// 	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
// }

// function useAuth() {
// 	return useContext(authContext);
// }

// function useProvideAuth() {
// 	const [user, setUser] = useState(null);

// 	const signin = (cb) => {
// 		return fakeAuth.signin(() => {
// 			setUser('user');
// 			cb();
// 		});
// 	};

// 	const signout = (cb) => {
// 		return fakeAuth.signout(() => {
// 			setUser(null);
// 			cb();
// 		});
// 	};

// 	return {
// 		user,
// 		signin,
// 		signout,
// 	};
// }

// function AuthButton() {
// 	let history = useHistory();
// 	let auth = useAuth();

// 	return auth.user ? (
// 		<p>
// 			Welcome!{' '}
// 			<button
// 				onClick={() => {
// 					auth.signout(() => history.push('/'));
// 				}}
// 			>
// 				Sign out
// 			</button>
// 		</p>
// 	) : (
// 		<p>You are not logged in.</p>
// 	);
// }

// // A wrapper for <Route> that redirects to the login
// // screen if you're not yet authenticated.
// function PrivateRoute({ children, ...rest }) {
// 	let auth = useAuth();
// 	return (
// 		<Route
// 			{...rest}
// 			render={({ location }) =>
// 				auth.user ? (
// 					children
// 				) : (
// 					<Redirect
// 						to={{
// 							pathname: '/login',
// 							state: { from: location },
// 						}}
// 					/>
// 				)
// 			}
// 		/>
// 	);
// }

// function PublicPage() {
// 	return <h3>Public</h3>;
// }

// function ProtectedPage() {
// 	return <h3>Protected</h3>;
// }

// function LoginPage() {
// 	let history = useHistory();
// 	let location = useLocation();
// 	let auth = useAuth();

// 	let { from } = location.state || { from: { pathname: '/' } };
// 	let login = () => {
// 		auth.signin(() => {
// 			history.replace(from);
// 		});
// 	};

// 	return (
// 		<div>
// 			<p>You must log in to view the page at {from.pathname}</p>
// 			<button onClick={login}>Log in</button>
// 		</div>
// 	);
// }