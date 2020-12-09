import React from 'react';
import './MainpageSection.css';
import { Link } from 'react-router-dom';


function MainpageSection(props) { 
    return (
        <div className="M-section-container">
            {/* <img class="M-section" id="m-section-image" src={props.photo} /> */}
            <h2 className="M-section" id="M-section-h">{props.heading}</h2>
            <p className="M-section" id="M-section-p">{props.text}</p>
            <button className="M-section" id="M-section-button"><Link to={props.link}>{props.button}</Link></button>
        </div>
    )
}

export default MainpageSection;