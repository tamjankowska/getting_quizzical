import React from 'react';
import './Mainpage.css';
import Section from './MainpageSection'
import pattern from '../../images/pattern.png'
import { BrowserRouter } from 'react-router-dom';

function Mainpage() {
    return (
        <BrowserRouter>
        <div className="mainpage-container">
            <Section heading="You're Doing Great, Sweetie!"
                text="See a track of all your Quizzical progress so far"
                link="/userHistory"
                button="See My History" />
            <Section heading="See How You Rank"
                text="Checkout the global leaderboards to see where you are in the world"
                link="/leaderboard"
                button="Let Me See The Leaderboard" />
            <Section heading="Play a Round"
                text="Test your knowledge - start a new quiz"
                link="/newQuiz"
                button="Start New Quiz" />
            <Section heading="Random Quiz"
                text="I don't care just give me my quiz fix!"
                link="/randomQuiz"
                button="Let's Get Into Quizzical" />
        </div>
        </BrowserRouter>
    )
}

export default Mainpage;