import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Landing from './components/landing/Landing';
import Signup from './components/signup/Signup';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="grid"></section>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/about" component={About} />
      </BrowserRouter>
    </div>
  );
}

export default App;
