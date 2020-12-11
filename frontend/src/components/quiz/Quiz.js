import React, { useEffect, useState } from "react";
import "./Quiz.css";
import axios from "axios";
import { nanoid } from "nanoid";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);

  const [questionID] = useState(nanoid);
  const [categoryID] = useState(nanoid);
  const [answersID] = useState(nanoid);

  const getQuestions = async () => {
    let url = `https://opentdb.com/api.php?amount=10`;
    await axios.get(url).then((res) => {
      setQuestions(res.data.results);
    });
  };

  useEffect(() => {
    if (questions.length == 0) {
      getQuestions();
    }
  });

  const startQuiz = (event) => {
    event.preventDefault();
    event.target.style.display = "none";
    setQuizStarted(true);
  };

  const [index, setIndex] = useState(1);

  const shuffle = (array) => {
        let shuffledArray = array.sort(() => Math.random() - 0.5);
        return shuffledArray;  // need to add in if statement so that it only shuffles once when timeLeft === 30
        // currently shuffles on every rerender 
      
  }
  
  const [timeLeft, setTimeLeft] = useState(30);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (timeLeft <= 30 && timeLeft >= 1) { 
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);   
      }, 1000);
      return () => clearInterval(timer);
    } 
    if (timeLeft === 0) {
        setIndex(index + 1);
        return;
    }
  });

  const questionCorrect = async () => {
    if (timeLeft >= 0) {
        setIndex(index + 1);
        setPoints(points + 10);
        {setTimeLeft(30)}
        alert("Correct! Total points: " + (points + 10));
    }
}  

const questionIncorrect = () => {
    if (timeLeft >= 0) {
        setIndex(index + 1);
        {setTimeLeft(30)}
        console.log(index);
        console.log("Incorrect. Total points: " + points)
    }
}

const playGame = () => {
    return (    
        <div className = "quizBeingPlayed">
            {questions.slice((index - 1), index).map((question) => (
              <div className="quizItems">
                
                <h1 className="question" key={questionID}>
                  {question.question}
                </h1>

                <h2 className="category-difficulty" key={categoryID}>
                  {question.category} | {question.difficulty}
                </h2>

                <div className="allAnswers" key={answersID}>
                  {([ // shuffle has been removed from here, needs to be added back in when fixed
                    question.correct_answer,
                    ...question.incorrect_answers,
                  ]).map((answer) => (
                    <div className="radio__input">
                      <input onClick = {() => {
                          if (answer === question.correct_answer) {
                              questionCorrect();
                          } else if (answer !== question.correct_answer) {
                              questionIncorrect();
                              console.log("The correct answer was " + question.correct_answer)
                          }
                      }}
                        key={answersID}
                        type="radio"
                        name="answer"
                        defaultChecked={false}
                        id={answersID}
                        className="radio__answer"
                      ></input>
                      <label className="radio__label" htmlFor="radio1">
                        {answer}
                        <br />
                      </label>
             
                    </div>
                  ))}
                  
                </div>
                <h1 className = "quiz-timeLeft">{timeLeft}</h1>
                <button className = "quiz-nextQuestion" onClick = {() => {
                    setIndex(index + 1);
                    setTimeLeft(30);
                }}>Next Question!</button>
               
              </div>
            ))}
            
          </div>
    )
}
  const replaceEntities = (html) => {
    let data = questions;
    questions.innerHTML = html;
    return questions.value;
  };

  return (
    <div className="quizWrapper">
      <div className="quizData">
        <button id="startQuiz" value="startQuiz" onClick={startQuiz}>
          Ready? Let's get quizzical!
        </button>
        {quizStarted ? (playGame()) : ("")}
      </div>
    </div>
  );
}

export default Quiz;
