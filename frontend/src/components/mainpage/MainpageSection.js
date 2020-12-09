import React from 'react';
import './MainpageSection.css';
import { Link } from 'react-router-dom';


function MainpageSection(props) {
    return (
            <div className="M-section-container" >
            {/* styles="background:url({{ props.url })" */}
                <h2 className="M-section" id="M-section-h">{props.heading}</h2>
                <p className="M-section" id="M-section-p">{props.text}</p>
                <button className="M-section" id="M-section-button"><Link to={props.link}>{props.button}</Link></button>
                {/* <img class="M-section" id="m-section-image" src={props.photo} /> */}
            </div>
    )
}

export default MainpageSection;