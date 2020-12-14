import React from 'react'
import { FaRegArrowAltCircleDown } from 'react-icons/fa';

function Questions({ faq, index, toggleQuestion }) {
    return (
        <div
            className={"faq " + (faq.open ? 'open' : '')}
            key={index}
            onClick={() => toggleQuestion(index)}
        >
            <div className="faq-question">
                {faq.question}
                <div className="faq-icon">
                <FaRegArrowAltCircleDown  />
                </div>
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>

        </div>
    )
}

export default Questions;