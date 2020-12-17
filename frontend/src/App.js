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
import Logout from './components/logout/Logout';
import LoggedInStatus from './components/loggedinstatus/LoggedInStatus';
import Faq from './components/Faq/Faq';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="app-header">
          <LoggedInStatus />
        </header>
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/main" component={Mainpage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/about" component={About} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/userhistory" component={UserHistory} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/faq" component={Faq} />
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
