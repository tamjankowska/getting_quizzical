import React, { useEffect, useState } from "react";
import "./Quiz.css";
import axios from "axios";
import { nanoid } from "nanoid";
import Logout from "../logout/Logout";
require("dotenv").config();

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);

  const [questionID] = useState(nanoid);
  const [categoryID] = useState(nanoid);
  const [difficultyID] = useState(nanoid);
  const [typeID] = useState(nanoid);
  const [correctID] = useState(nanoid);
  const [incorrectID] = useState(nanoid);
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

  const startTimer = () => {
    let currentTime = Date.now();
    let interval = 1000; // ms
    setInterval(function () {
      let timeDiff = Math.floor((Date.now() - currentTime) / 1000);
    });
  };

  const replaceEntities = (html) => {
    let data = questions;
    questions.innerHTML = html;
    return questions.value;
  };

  return (
        <>
          {sessionStorage.getItem("loggedIn") ? (
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
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <Logout />
      )}
    </>
  );
}

export default Quiz;
