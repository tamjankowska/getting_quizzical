import React from 'react';
import './Mainpage.css';
import Section from './MainpageSection'
import pattern from '../../images/pattern.png'

function Mainpage() {
    return (
        <div className="mainpage-container">
            <Section heading="You're Doing Great, Sweetie!"
                text="See a track of all your Quizzical progress so far"
                button="See My History" />
            <Section heading="See How You Rank"
                text="Checkout the global leaderboards to see where you are in the world"
                button="See Leaderboard" />
            <Section heading="Play a Round"
                text="Test your knowledge - start a new quiz"
                button="Start New Quiz" />
            <Section heading="Random Quiz"
                text=""
                button="Take Me To The Quiz" />
        </div>
    )
}

export default Mainpage;