// Dependencies Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// React Burger Menu
// https://github.com/negomi/react-burger-menu
import { slide as Slide } from 'react-burger-menu';

// Material UI Core Imports
import { Button, Menu, MenuItem } from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Style
import './scss/Navbar.css';

// Actions
import { logout } from '../../redux/actions/userActions';

const Navbar = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	// Redux
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);

	// Deconstructing userLogin data
	const { userInfo } = userLogin;

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<nav>
			<div className="nav-container">
				<div className="company-info">
					<div className="logo">logo</div>
					<div className="company-name">AniTime</div>
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
					<li>
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
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
