import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NavbarLO from './components/navbar/NavbarLO';
import Landing from './components/landing/Landing';
import Mainpage from './components/mainpage/Mainpage';
import Signup from './components/signup/Signup';
import About from './components/about/About';
import Quiz from './components/quiz/Quiz';
import Leaderboard from './components/Leaderboard/Leaderboard';
import UserHistory from './components/UserHistory/UserHistory';
import Footer from './components/Footer/Footer';


function App() {

  const [showNavbar] = useState(false);



  return (
    <div className="App">
      <BrowserRouter>
        <header className="app-header">
          <Switch>
            <Route exact path="/" component={NavbarLO} />
            <Route exact path="/main" component={NavbarLO} />
            <Route exact path="/signup" component={NavbarLO} />
            {showNavbar ? (<Route exact path="/about" component={Navbar} />) : (<Route exact path="/about" component={NavbarLO} />)}
            <Route exact path="/quiz" component={Navbar} />
            <Route exact path="/leaderboard" component={Navbar} />
            <Route exact path="/UserHistory" component={Navbar} />
          </Switch>
        </header>
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/main" component={Mainpage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/about" component={About} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/UserHistory" component={UserHistory} />
          </Switch>
        </div>
        <footer className="app-footer">
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
