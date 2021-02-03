// Dependencies Imports
import React from 'react';
import { Route } from 'react-router-dom';

// FONTAWESOME!
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// Pages
import AnimeDetails from './Pages/Animes/AnimeDetails/AnimeDetails';
import Animes from './Pages/Animes/Animes';
import Characters from './Pages/Characters/Characters';
import Donate from './Pages/Donate/Donate';
import EditAnime from './Pages/Animes/Controllers/EditAnime/EditAnime';
import Homepage from './Pages/Homepage/Homepage';
import Header from './Pages/Header/Header';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Studios from './Pages/Studios/Studios';
import VoiceActors from './Pages/VoiceActors/VoiceActors';
import Profile from './Pages/Profile/Profile';
import Profiles from './Pages/Profile/Profiles';
import ProfileEdit from './Pages/Profile/Controllers/ProfileEdit/ProfileEdit';

// Style
import './App.css';

// FONTAWESOME!
library.add(fab, faCheckSquare, faCoffee)

function App() {
	return (
		<div className="App">
			<Header />
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
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/profile/all" component={Profiles} />
						<Route exact path="/profile/:id" component={ProfileEdit} />
					</>
				)}
			/>
		</div>
	);
}

export default App;
