import React, { useEffect, useState } from "react";
import "./Quiz.css";
import axios from "axios";
import { nanoid } from "nanoid";
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
    setInterval(function() {
        let timeDiff = Math.floor((Date.now() - currentTime) / 1000);

    })
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

                <h2 className="category" key={categoryID}>
                  {question.category}
                </h2>

                <h3 className="difficulty" key={difficultyID}>
                  {question.difficulty}
                </h3>

                <h4 className="quizType" key={typeID}>
                  {question.type}
                </h4>

                <h5 className="allAnswers" key={answersID}>
                  {shuffle([
                    question.correct_answer,
                    ...question.incorrect_answers,
                  ]).map((answer) => (
                    <p className="answer">{answer}</p>
                  ))}
                </h5>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Quiz;
