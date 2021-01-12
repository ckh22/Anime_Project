// Dependencies Imports
import React from 'react';
import { Route } from 'react-router-dom';

// Pages
import AnimeDetails from './Pages/Animes/AnimeDetails/AnimeDetails';
import Animes from './Pages/Animes/Animes';
import Characters from './Pages/Characters/Characters';
import Donate from './Pages/Donate/Donate';
import EditAnime from './Pages/Animes/Controller/EditAnime/EditAnime';
import Homepage from './Pages/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Studios from './Pages/Studios/Studios';
import VoiceActors from './Pages/VoiceActors/VoiceActors';

// Style
import './App.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Route exact path="/" component={Homepage} />
			<Route
				path={'/(.+)'}
				render={() => (
					<>
						<Route exact path="/anime/:id" component={AnimeDetails} />
						<Route exact path="/animes" component={Animes} />
						<Route exact path="/characters" component={Characters} />
						<Route exact path="/donate" component={Donate} />
						<Route exact path="/animes/:id/edit" component={EditAnime} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/studios" component={Studios} />
						<Route exact path="/voiceActors" component={VoiceActors} />
					</>
				)}
			/>
		</div>
	);
}

export default App;
