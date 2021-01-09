// Dependencies
import React from 'react';
import { Route } from 'react-router-dom';

// Pages
import Animes from './Pages/Animes/Animes';
import Studios from './Pages/Studios/Studios';
import Characters from './Pages/Characters/Characters';
import Homepage from './Pages/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import VoiceActors from './Pages/VoiceActors/VoiceActors';
import AnimeDetails from './Pages/Animes/AnimeDetails/AnimeDetails';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

// Style
import './App.css';
import Donate from './Pages/Donate/Donate';

function App() {
	return (
		
			<div className="App">
				<Navbar />
				<Route exact path="/" component={Homepage} />
				<Route
					path={'/(.+)'}
					render={() => (
						<>
							<Route exact path="/studios" component={Studios} />
							<Route exact path="/animes" component={Animes} />
							<Route exact path="/animes/:id" component={AnimeDetails} />
							<Route exact path="/characters" component={Characters} />
							<Route exact path="/voiceActors" component={VoiceActors} />
							<Route exact path="/donate" component={Donate} />
						</>
					)}
				/>
			</div>
	);
}

export default App;
