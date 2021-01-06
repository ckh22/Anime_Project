import Animes from './Pages/Animes/Animes'
import Studios from './Pages/Studios/Studios'
import Characters from './Pages/Characters/Characters'
import Homepage from './Pages/Homepage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import {Fragment} from 'react'
import { Route } from "react-router-dom";
import VoiceActors from './Pages/VoiceActors/VoiceActors'
import './App.css'
import AnimeDetails from './Pages/Animes/AnimeDetails/AnimeDetails'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Route exact path='/'
                component={Homepage}/>
            <Route path={"/(.+)"}
                render={
                    () => (
                        <Fragment>
                          <Route exact path='/studios' component={Studios} />
                          <Route exact path='/animes' component={Animes} />
                          <Route exact path='/animes/:id' component={AnimeDetails} />
                          <Route exact path='/characters' component={Characters} />
                          <Route exact path='/voiceActors' component={VoiceActors} />
                        </Fragment>
                    )
                }/>
        </div>
    );
}

export default App;
