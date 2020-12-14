import React, { useState } from "react";
import './Faq.css';
import Questions from './Questions';

function Faq() {

    const [faqs, setfaqs] = useState([
        {
            question: 'How do I play a quiz?',
            answer: `You can only play a quiz if you've got an account so make sure you're signed up and signed in! After that head to the main page and choose either "Start New Quiz" to play a quiz of your chosing or click "Let's Get Into Quizzical" to play a randomly generated quiz.`,
            open: false
        },
        {
            question: 'How can I see my progress?',
            answer: `You can see your progress in the User History page available from the footer or the main page. Here is a record of every quiz you've taken since signing up.`,
            open: false
        },
        {
            question: 'How does the leaderboard work?',
            answer: 'The leaderboard shows you the highest scores recorded for any quiz. Using the filtering options at the top you can narrow down the categories, difficulty or quiz type to see how closely you rank amongst everyone else!',
            open: false
        }
    ]);

    const toggleQuestion = (index) => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }

    return (
        <div className="faq-wrapper">
            <h1 className="faq-header">Frequently Asked Questions</h1>
            <div className="faqs">
                {faqs.map((faq, index) => (
                    <Questions faq={faq} index={index} toggleQuestion={toggleQuestion} />
                ))}
            </div>
        </div>
    )
}

export default Faq;

