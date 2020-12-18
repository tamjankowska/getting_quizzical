import React, { useEffect, useState } from "react";
import "./Quiz.css";
import axios from "axios";
import Swal from 'sweetalert2';

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
  const [category, setCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("easy");
  const [type, setType] = useState("boolean");

  const getQuestions = async () => {
    let url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`;
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

  const playGame = () => {
    if (index === 10) {
      Swal.fire({
        title: "How quizzical did you get?! Your total score is: " + points,
        imageUrl: 'https://i.gifer.com/685r.gif',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Olivia Newton John looking through legs',
        confirmButtonColor: '#C4F43C'
      });
      setQuizStarted(false)
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
        </div>
      </div>
    );
  };

  return (
    <div className="quizWrapper">
      {(quizEnded) ? <GameOver 
            points={points} 
            type = {type} 
            difficulty = {difficulty}
            category = {category}
            setQuizStarted = {setQuizStarted}
            quizEnded = {quizEnded}
             
          /> :
        <>
          {(quizStarted && !quizEnded) ? playGame() :
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
          </div>
          } 
        </>
      }
  
    </div>
  );
}

export default Quiz;
