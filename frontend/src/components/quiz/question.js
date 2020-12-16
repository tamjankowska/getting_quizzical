import React, {useState} from 'react'

function Question(props) {
    
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
          
          console.log(props.index + "Correct! Total points: " + (props.points + 10));
        }
      };

      const questionIncorrect = () => {
        if (props.timeLeft >= 0) {
          props.setIndex(props.index + 1);
          console.log(`${props.index} Incorrect. The correct answer was: '${props.question.correctAnswer}'. Total points: ${props.points}`);
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
                <div className="radio__input">
                    
                        {props.question.answers.map((answer, answerID) => (
                            <div>
                                <button 
                                    key = {answerID}
                                    onClick = {clickAnswer}
                                    value = {answer}
                                >{answer}
                                </button>   
                            </div>
                        ))}
                 
                </div>
            </div>
        </div>
       
    )
}

export default Question
