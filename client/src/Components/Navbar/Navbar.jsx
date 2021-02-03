// Dependencies Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// React Burger Menu
// https://github.com/negomi/react-burger-menu
// import { slide as Slide } from 'react-burger-menu';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';

// Style
import './scss/Navbar.css';

//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavItem(props) {
	return (
		<li className="nav-item">
			<a href="#" className="icon-button">
				{props.icon}
			</a>
		</li>
	);
}
const Navbar = () => {
	// State
	const [toggle, setToggle] = useState(false);

	// Redux
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);

	// Deconstructing userLogin data
	const { userInfo } = userLogin;
	const logoutHandler = () => {
		dispatch(logout());
	};
	return (
		<>
			<div className="navbar-container">
				<nav>
					<ul>
						<li>
							<Link to={`/`}>Home</Link>
						</li>
						<li>
							<Link to={`/animes`}>Animes</Link>
						</li>
						<li>
							<Link to={`/studios`}>Studios</Link>
						</li>
						<li>
							<Link to={`/voiceActors`}>Voice Actors</Link>
						</li>
						<li>
							<Link to={`/donate`}>Want to help?</Link>
						</li>
						{userInfo ? (
							<div>
								<li>
									<Link to={`/profile`}>Profile</Link>
								</li>
								<li>
									<Link to={`/account`}>My Account</Link>
								</li>
								<li>
									<Link to={`/logout`} onClick={logoutHandler}>
										My Account
									</Link>
								</li>
							</div>
						) : (
							<div>
								<li>
									<Link to="/login">Login</Link>
								</li>
								<li>
									<Link to="/register" id="links">
										Register
									</Link>
								</li>
							</div>
						)}
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
