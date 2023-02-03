import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Banner from './Components/Banner';
import About from './Components/About';
import Design from './Components/Design';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Services/>
      <Banner/>
      <br/>
      <About/>
      <b/>
      <Design/>
    </div>
  );
}

export default App;
