import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Landing from './components/landing/Landing';
import Mainpage from './components/mainpage/Mainpage';
import Signup from './components/signup/Signup';
import About from './components/about/About';
import Quiz from './components/quiz/Quiz';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/main" component={Mainpage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/about" component={About} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/leaderboard" component={Leaderboard} />
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
