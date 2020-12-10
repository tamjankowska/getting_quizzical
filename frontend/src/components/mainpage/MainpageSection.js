import React from 'react';
import './MainpageSection.css';

function MainpageSection(props) {
    return (
            <div className="M-section-container" >
            {/* styles="background:url({{ props.url })" */}
                <h2 className="M-section" id="M-section-h">{props.heading}</h2>
                <p className="M-section" id="M-section-p">{props.text}</p>
                <button className="M-section" id="M-section-button"><a href={props.link}>{props.button}</a></button>
                {/* <img class="M-section" id="m-section-image" src={props.photo} /> */}
            </div>
    )
}

export default MainpageSection;