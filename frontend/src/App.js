import './App.css';
import Navbar from './components/navbar/Navbar';
import Landing from './components/landing/Landing';
import Mainpage from './components/mainpage/Mainpage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainpage />
      <div className="grid"></div>
      {/* <Landing /> */}
      
    </div>
  );
}

export default App;
