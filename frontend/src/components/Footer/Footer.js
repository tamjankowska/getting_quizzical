import React from 'react';
import './Footer.css';
import Logo from '../../images/quizzical_icon.png';
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    RedditShareButton,
    TumblrShareButton,
    TwitterShareButton,
    TwitterIcon,
    TumblrIcon,
    RedditIcon,
    PinterestIcon,
    EmailIcon,
} from "react-share";

function Footer() {
    const url = "www.letsget-quizzical.herokuapp.com/";
    const quote="Join me on Let's Get Quizzical! \n";
    return (
    <>
        <div className="push"></div>
        <div className="Footer-container">
            <div className="footer-img">
                <a href="/quiz"><img src={Logo} alt="Quizzical Logo" value="Play"/></a>
            </div>
            <div className="boring-footer">
                <div className="footer-column1">
                    <h3>About</h3>
                    <ul>
                        <li><a class="footer-links" href="/about">About Quizzical</a></li>
                        <li><a class="footer-links" href="https://github.com/katiemhughes" target="_blank" rel="noreferrer">Katie</a></li>
                        <li><a class="footer-links" href="https://github.com/tamjankowska" target="_blank" rel="noreferrer">Tam</a></li>
                        <li><a class="footer-links" href="https://github.com/echarlotte612" target="_blank" rel="noreferrer">Emily</a></li>
                        <li><a class="footer-links" href="https://wearecodenation.com/" target="_blank" rel="noreferrer">Code Nation</a></li>
                    </ul>
                </div>
                <div className="footer-column2">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="/faq" class="footer-links">FAQ</a></li>
                        <div className="social">
                            <ul className="social-title"> Share Us:<br/>
                                <FacebookShareButton className="social-link" url={url} quote={quote}><FacebookIcon size={32} round /></FacebookShareButton>
                                <TwitterShareButton className="social-link" url={url} quote={quote}><TwitterIcon size={32} round /></TwitterShareButton>
                                <TumblrShareButton className="social-link" url={url} quote={quote}><TumblrIcon size={32} round /></TumblrShareButton>
                                <PinterestShareButton className="social-link" url={url} quote={quote}><PinterestIcon size={32} round /></PinterestShareButton>
                                <RedditShareButton className="social-link" url={url} quote={quote}><RedditIcon size={32} round /></RedditShareButton>
                                <EmailShareButton className="social-link" body={quote} url={url} subject="Come and join in with me on this quiz site!">
                                    <EmailIcon size={32} round />
                                </EmailShareButton>
                            </ul>
                        </div>
                    </ul>
                </div>
                <div className="footer-column3">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="/main" class="footer-links">Home</a></li>
                        <li><a href="/leaderboard" class="footer-links">Leaderboard</a></li>
                        <li><a href="/userhistory" class="footer-links">User History</a></li>
                        <li><a href="/" class="footer-links">User Login</a></li>
                        <li><a href="/quiz" class="footer-links">Play a Quiz</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;