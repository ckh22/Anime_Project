// Dependencies Imports
import React, { useState } from 'react';

// React-Router-Dom
import { Link } from 'react-router-dom';

// React Hamburger
import { Divide as Hamburger } from 'hamburger-react';

// Layout Imports
import Navbar from '../../Components/Navbar/Navbar';

// Styles Imports
import './Header.css';

const Header = () => {
	// State
	// If clicked on set the toggle to true
	const [isOpen, setOpen] = useState(false);
	const [color, setColor] = useState('blue');
	const onClickHandler = () => {
		if (color === 'red') {
			console.log(`it's ${color}`);
		} else {
			console.log(color);
		}
	};

	return (
		<>
			<section className="header-container">
				<header>
					<div className="header-logo">
						<Link to="/">Logo</Link>
					</div>

					<div className="header-company-name">
						<Link to="/">Anitime</Link>
					</div>

					<div className="toggle" onClick={onClickHandler} style={{ backgroundColor: color }}>
						<Hamburger label="Show menu" rounded toggled={isOpen} toggle={setOpen} />
					</div>
				</header>
				<div className={isOpen ? 'navbar' : 'navbar active'}>
					<Navbar />
				</div>
			</section>
		</>
	);
};

export default Header;
