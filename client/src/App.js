import Animes from './Pages/Animes/Animes'
import Studios from './Pages/Studios/Studios'
import Characters from './Pages/Characters/Characters'
import Homepage from './Pages/Homepage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import {Fragment} from 'react'
import { Route } from "react-router-dom";
import Anime from './Pages/Animes/Anime/Anime'
import './App.css'

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
                          <Route exact path='/animes/:id' component={Anime} />
                          <Route exact path='/characters' component={Characters} />
                        </Fragment>
                    )
                }/>
        </div>
    );
}

export default App;
