import React, { useEffect, useState } from "react";
import "./Quiz.css";
import axios from "axios";
import { nanoid } from "nanoid";
import GetQuestions from './getQuestions';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = (event) => {
    event.preventDefault();
    event.target.style.display = "none";
    setQuizStarted(true);
  };

  const [index, setIndex] = useState(1);



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
      setPoints(points + 10)
      setTimeLeft(30);
      
      console.log(index + "Correct! Total points: " + (points + 10));
    }
  };

  const questionIncorrect = () => {
    if (timeLeft >= 0) {
      setIndex(index + 1);
      setTimeLeft(30);
      
      console.log(index);
      console.log(index + "Incorrect. Total points: " + points);
    }
  };

  const playGame = () => {
    if (index === 11) {
      setIndex(index + 1);
      alert("How quizzical did you get?! Your total score is: " + points);
      setQuizStarted(false);

      return (
        <button className="startQuiz" value="startQuiz" onClick={startQuiz}>
        Play again!
      </button>
      )
    }

    return (
      <div>
        <GetQuestions />
            <h1 className="quiz-timeLeft">{timeLeft}</h1>
            <button
              className="quiz-nextQuestion"
              onClick={() => {
                setIndex(index + 1);
                setTimeLeft(30);
              }}
            >
              Next Question!
            </button>
          
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
        <button className="startQuiz" value="startQuiz" onClick={startQuiz}>
          Ready? Let's get quizzical!
        </button>
        {quizStarted ? playGame() : ""}
      </div>
    </div>
  );
}

export default Quiz;
