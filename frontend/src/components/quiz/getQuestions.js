import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {nanoid} from 'nanoid';

function GetQuestions() {

    const [questionID] = useState(nanoid);
    const [categoryID] = useState(nanoid);
    const [answersID] = useState(nanoid);

    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState('');

    useEffect(() => {
        if (questions.length == 0) {
          getQuestions();
        }
      });

    const shuffle = (array) => {
        let shuffledArray = array.sort(() => Math.random() - 0.5);
        return shuffledArray;
    };

    const getQuestions = async () => {
        let url = `https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`;
        await axios.get(url).then((res) => {
        console.log(res.data.results);
        setQuestions(res.data.results);
        });

        questions.map((question) => (
            setQuestion(question.question),
            setCategory(question.category),
            setType(question.type),
            setDifficulty(question.difficulty),
            setAnswers(shuffle([question.correct_answer, ...question.incorrect_answers])),
            setCorrectAnswer(question.correct_answer)
        ))      
    }

    return (
        <div>
            {question}
            {category}
            {difficulty}
            {answers}
            {correctAnswer}
        </div>
        // <div className="quizItems">
        //     <h1 className="question" key={questionID}>
        //         {question}
        //     </h1>

        //     <h2 className="category-difficulty" key={categoryID}>
        //         {category} | {difficulty}
        //     </h2>

        //     <div className="allAnswers" key={answersID}>
        //         <div className="radio__input">
        //             <input
        //                 // onClick={(answer) => {
        //                 // if (answer === correctAnswer) {
        //                 //     questionCorrect();
        //                 //     alert("Correct! Total points: " + (points + 10));
        //                 // } else if (answer !== correctAnswer) {
        //                 //     questionIncorrect();
        //                 //     alert(
        //                 //         "Incorrect. Total points: " +
        //                 //         points +
        //                 //         ". The correct answer was: " +
        //                 //         correctAnswer
        //                 //     );
        //                 // }
        //                 // }}
        //                 key={answersID}
        //                 type="radio"
        //                 name="answer"
        //                 defaultChecked={false}
        //                 id={answersID}
        //                 className="radio__answer"
        //             ></input>
        //             <label className="radio__label" htmlFor="radio1">
        //                 {answers}
        //                 <br />
        //             </label>
        //         </div>
           
        //     </div>
        // </div>
    
    )
}

export default GetQuestions;
