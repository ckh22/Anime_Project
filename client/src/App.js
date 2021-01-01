import Anime from './Pages/Anime/Anime'
import Studio from './Pages/Studio/Studio'
import Character from './Pages/Character/Character'
import Homepage from './Pages/Homepage/Homepage'
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Anime />
      <Studio />
      <Character />
      <Homepage />
    </div>
  );
}

export default App;
