import React, { useEffect, useState } from "react";
import "./Quiz.css";
import axios from "axios";
import Question from "./Question";
import GameOver from "./GameOver";
import QuizSelection from "./QuizSelection";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [points, setPoints] = useState(0);
  const [url, setUrl] = useState("");
  const [resultsSent, setResultsSent] = useState(false);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");

  const getQuestions = async () => {
    // setResultsSent(false);
    // let category = sessionStorage.getItem('category');
    // let difficulty = sessionStorage.getItem('difficulty');
    // let type = sessionStorage.getItem('type');

    let url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`;
    console.log(url)
    console.log('difficulty', difficulty)
    console.log('type', type)
    console.log('category', category)
    
    await axios
      .get(url)
      .then((res) => {
        let data = res.data.results.map((question) => {
          return {
            category: question.category,
            type: question.type,
            difficulty: question.difficulty,
            question: question.question,
            answers: shuffle([
              ...question.incorrect_answers,
              question.correct_answer,
            ]),
            correctAnswer: question.correct_answer,
          };
        });
        setQuestions(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (questions.length === 0 && quizStarted) {
      getQuestions();
    }
  });

  const startQuiz = (event) => {
    event.preventDefault();
    event.target.style.display = "none";
    setQuizStarted(true);
  };

  const shuffle = (array) => {
    let shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray;
  };

  // useEffect(() => {
  //   if (timeLeft <= 30 && timeLeft >= 1) {
  //     const timer = setInterval(() => {
  //       setTimeLeft(timeLeft - 1);
  //     }, 1000);
  //     return () => clearInterval(timer);
  //   }
  //   if (timeLeft === 0) {
  //     console.log(questions[index +1])
  //     setIndex(index + 1);
  //     return;
  //   }
  // });

  const playGame = () => {
    if (index === 10) {
      alert("How quizzical did you get?! Your total score is: " + points);
      setQuizStarted(false);
      setQuizEnded(true);
      return;
    }

    return (
      <div className="quizBeingPlayed">
        <div className="quizItems">
          {(questions[index]) ?
          <Question
            question={questions[index]}
            index={index}
            setIndex={setIndex}
            points={points}
            setPoints={setPoints}
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
          />
          : "" }

          {/* <h1 className="quiz-timeLeft">{timeLeft}</h1>
            <button
              className="quiz-nextQuestion"
              onClick={() => {
                setIndex(index + 1);
                setTimeLeft(30);
              }}
            >
              Next Question!
            </button> */}
        </div>
      </div>
    );
  };

  return (
    <div className="quizWrapper">
      <div className="quizData">
          <QuizSelection 
            url = {url}
            setUrl = {setUrl}
            difficulty = {difficulty}
            setDifficulty = {setDifficulty}
            category = {category}
            setCategory = {setCategory}
            type = {type}
            setType = {setType}
          />
          <button id="startQuiz" value="startQuiz" onClick={startQuiz}>
            Ready? Let's get quizzical!
          </button>

        {quizStarted ? playGame() : ""}
        {!quizStarted && quizEnded ? 
          <GameOver 
            points={points} 
            type = {type} 
            difficulty = {difficulty}
            setQuizStarted = {setQuizStarted}
             
          /> : ""}
      </div>
    </div>
  );
}

export default Quiz;
