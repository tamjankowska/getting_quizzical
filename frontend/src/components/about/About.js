import React from 'react';
import './About.css';
import IdleTimer from '../logoutpopup/LogoutPopup';

function About() {
    return (
        <div>
            <div className="about-container">
                <IdleTimer />
                <svg>
                <defs>
                    <filter id="stroke">
                        <feMorphology operator="dilate" radius="1" in="SourceGraphic" result="outside" />
                        <feMorphology operator="dilate" radius="2" in="outside" result="thickened" />
                        <feComposite operator="out" in2="SourceGraphic" in="thickened" result="stroke"/>
                    </filter>
                    <filter id="inner-glow" >
                        <feFlood flood-color="#e10b8d"/>
                        <feComposite in2="SourceAlpha" operator="out"/>
                        <feGaussianBlur stdDeviation="0.5" result="blur"/>
                        <feComposite operator="atop" in2="SourceGraphic"/>
                    </filter>
                    <filter id="outer-glow">
		                <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
		                <feGaussianBlur in="thicken" stdDeviation="5" result="blurred" />
		                <feFlood  flood-color="#db0273" result="glowColor" />
		                <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
		                <feMerge>
			                <feMergeNode in="softGlow_colored"/>
			                <feMergeNode in="SourceGraphic"/>
		                </feMerge>
                    </filter>
                    <filter id="outer-glow1">
		                <feMorphology operator="dilate" radius="20" in="SourceAlpha" result="thicken" />
		                <feGaussianBlur in="thicken" stdDeviation="25" result="blurred" />
		                <feFlood  flood-color="#530139" result="glowColor" />
		                <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
		                <feMerge>
			                <feMergeNode in="softGlow_colored"/>
			                <feMergeNode in="SourceGraphic"/>
		                </feMerge>
                    </filter>
                </defs>
                </svg>
                <div className="centered">
                    <div className="neon">About Let's Get Quizzical</div>
                </div>
                
                <div className="about-text-container">
                    <p className="about-text">This is a quiz app inspired Olivia Newton John's 1981 hit, Let's Get Physical, in terms of the name and the 80s design.</p>
                    <p className="about-text">Users are able to choose either easy, medium or hard difficulties, and between multiple choice or true and false quiz types.</p>
                    <p className="about-text">Users can also pick which category they would like for the quiz. The category choices are:</p>
                    <ul className="fa-ul">
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>General knowledge</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Books</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Film</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Music</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Musicals/Theatres</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Television</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Video Games</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Board Games</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Science and Nature</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Computers</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Mathematics</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Mythology</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Sport</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Geography</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>History</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Politics</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Art</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Celebrities</li>
                        <li><span class="fa-li"><i class="fas fa-medal"></i></span>Animals</li>
                    </ul>
                    <p className="about-text">The quiz was made with ❤️ by Tam Jankowska, Emily Baldocke and Katie Hughes!</p>
                </div>
            </div>
        </div>
    )
}

export default About;
