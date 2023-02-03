import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Services/>
    </div>
  );
}

export default App;
