import React from 'react';
import Swal from 'sweetalert2';

function Question(props) {
    console.log(props)
    
    sessionStorage.setItem('quizTakenAt', Date.now())

    const clickAnswer = (event) => {
        props.setIndex(1 + props.index);
        props.setTimeLeft(30);

        if (event.target.value === props.question.correctAnswer) {
            questionCorrect();
        } else {
            questionIncorrect();
        }
        console.log(props.points)
    }

    const questionCorrect = () => {
        if (props.timeLeft >= 0) {
            props.setIndex(props.index + 1);
            props.setPoints(props.points + 10)
                Swal.fire({
                    title: `${props.index} Correct! Total points: ${props.points + 10}`,
                    imageUrl: 'https://i.imgur.com/r3VHXOc.gif',
                    imageWidth: 300,
                    imageHeight: 200,
                    imageAlt: 'Mans stomach',
                    confirmButtonColor: '#C4F43C'
                });
        }
    };

    const questionIncorrect = () => {
        if (props.timeLeft >= 0) {
        props.setIndex(props.index + 1);
            Swal.fire({
                title: `${props.index} Incorrect. The correct answer was: '${props.question.correctAnswer}'. Total points: ${props.points}`,
                imageUrl: 'https://i.imgur.com/eJTOaZh.gif',
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: 'Men exercising',
                confirmButtonColor: '#C4F43C'
            });
        }
    };

    return (
        
        <div>
            <h1 className="question">
                {props.question.question}
            </h1>
            <h2 className="category-difficulty">
              {props.question.category} | {props.question.difficulty}
            </h2>
            <div className="allAnswers">              
                {props.question.answers.map((answer, answerID) => (
                    <button
                        className = "answer-button" 
                        key = {answerID}
                        onClick = {clickAnswer}
                        value = {answer}
                    > ✨ {answer} ✨
                    </button> 
                ))}
            </div>
        </div>
    )
}

export default Question
