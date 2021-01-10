// Dependencies Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Material UI Core Imports
// import MenuIcon from '@material-ui/icons/Menu';
// import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { Button } from '@material-ui/core';

// Components Imports
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import SearchBox from '../SearchBox/SearchBox';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Style
import './Navbar.css';

// Actions
import { logout } from '../../redux/actions/userActions';

const Navbar = () => {
	const [loginOpen, setLoginOpen] = useState(false);
	const [registerOpen, setRegisterOpen] = useState(false);
	// const [isShown, setIsShown] = React.useState(false);

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

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
						<Link to={`/Donate`} id="links">
							Want to help?
						</Link>
					</li>
				</ul>
				{userInfo ? (
					<Button color="inherit" onClick={logoutHandler}>
						Logout
					</Button>
				) : (
					<div className="btn-auth">
						<Button color="inherit" onClick={handleClickShowLogin}>
							Login
						</Button>
						<Button color="inherit" onClick={handleClickShowRegister}>
							Register
						</Button>
					</div>
				)}{' '}
			</div>

			<Login open={loginOpen} setOpen={setLoginOpen} />
			<Register open={registerOpen} setOpen={setRegisterOpen} />
		</nav>
	);
};

export default Navbar;
