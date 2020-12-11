import React, { useEffect, useState, useRef } from "react";
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

  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    if (timeLeft <= 15 && timeLeft > 0) { 
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);   
      }, 1000);
      return () => clearInterval(timer);
    }
  });

  const replaceEntities = (html) => {
    let data = questions;
    questions.innerHTML = html;
    return questions.value;
  };

  return (
    <div className="quizWrapper">
      <div className="quizData">
        <button id="startQuiz" value="startQuiz" onClick={startQuiz}>
          Ready? Let's go!
        </button>
        {quizStarted ? (
          <div>
            {questions.map((question) => (
              <div className="quizItems">
                <h1 className="question" key={questionID}>
                  {question.question}
                </h1>

                <h2 className="category-difficulty" key={categoryID}>
                  {question.category} | {question.difficulty}
                </h2>

                <div className="allAnswers" key={answersID}>
                  {shuffle([
                    question.correct_answer,
                    ...question.incorrect_answers,
                  ]).map((answer) => (
                    <div className="radio__input">
                      <input
                        key={answersID}
                        type="radio"
                        name="answer"
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
              </div>
            ))}
            <h1 className = "quiz-timeLeft">{timeLeft}</h1>
          </div>
          
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Quiz;
