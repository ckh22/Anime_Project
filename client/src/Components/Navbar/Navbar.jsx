// Dependencies Imports
import React from 'react';
import { Link } from 'react-router-dom';

// React Burger Menu
// https://github.com/negomi/react-burger-menu
// import { slide as Slide } from 'react-burger-menu';

// Material UI Core Imports
import { Box } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// Style
import './scss/Navbar.css';

const Navbar = () => {
	
	// Redux
	const userLogin = useSelector((state) => state.userLogin);

	// Deconstructing userLogin data
	const { userInfo } = userLogin;

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
					{userInfo ? (
						<Box>
							<li>
								<Link to="/profile">Profile</Link>
							</li>
							<li>
								<Link to="/account">My Account</Link>
							</li>
						</Box>
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
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
