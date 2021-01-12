// Dependencies Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Material UI Core Imports
import { makeStyles } from '@material-ui/core/styles';
import {
	Avatar,
	Button,
	Dialog,
	TextField,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	Menu,
	MenuItem,
	Grid,
	Box,
	Typography,
	Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// Components Imports
import Login from '../Auth/Login';
import Register from '../Auth/Register';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Style
import './Navbar.css';

// Actions
import { logout } from '../../redux/actions/userActions';

const Navbar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [loginOpen, setLoginOpen] = useState(false);
	const [registerOpen, setRegisterOpen] = useState(false);

	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleClickShowLogin = () => {
		setLoginOpen(!loginOpen);
	};
	const handleClickShowRegister = () => {
		setRegisterOpen(!registerOpen);
	};

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<nav>
			<div className="nav-container">
				<div className="company-info">
					<div className="logo">logo</div>
					<div className="company-name">Anime Station</div>
				</div>
				<ul className="nav-links">
					<li className="nav-link">
						<Link to={`/`} id="links">
							Home
						</Link>
					</li>
					<li className="nav-link">
						<Link to={`/animes`} id="links">
							Animes
						</Link>
					</li>
					<li className="nav-link">
						<Link to={`/studios`} id="links">
							Studios
						</Link>
					</li>
					<li className="nav-link">
						<Link to={`/voiceActors`} id="links">
							Voice Actors
						</Link>
					</li>

					<li className="nav-link">
						<Link to={`/donate`} id="links">
							Want to help?
						</Link>
					</li>
				</ul>
				{userInfo ? (
					<div className="menu">
						<Button
							className="nav-link"
							id="links"
							aria-controls="simple-menu"
							aria-haspopup="true"
							onClick={handleClick}
						>
							Open Menu
						</Button>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem onClick={handleClose}>My Account</MenuItem>
							<MenuItem onClick={logoutHandler}>Logout</MenuItem>
						</Menu>
					</div>
				) : (
					<div className="btn-auth">
						<ul className="nav-links">
							<li className="nav-link">
								<Link to="/login" id="links">
									Login
								</Link>
							</li>
							<li className="nav-link">
								<Link to="/register" id="links">
									Register
								</Link>
							</li>
						</ul>
					</div>
				)}{' '}
			</div>
		</nav>
	);
};

export default Navbar;
