import React, { useEffect, useState } from "react";
import "./Quiz.css";
import axios from 'axios';
import {nanoid} from 'nanoid';
require("dotenv").config();

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [categoryID] = React.useState(nanoid);
    const [difficultyID] = React.useState(nanoid);
    const [typeID] = React.useState(nanoid);
    const [correctID] = React.useState(nanoid);
    const [incorrectID] = React.useState(nanoid);


    const getQuestions = async () => {
        let url = `https://opentdb.com/api.php?amount=10`;
        await axios.get(url).then((res) => {
            setQuestions(res.data.results);   
        });
        
    };

    useEffect(() => {
        if (questions.length == 0) {
            getQuestions();
        } else {
            displayQuestions();
            console.log(questions)
        }
    })

    const displayQuestions = () => {

    }

    return (
        <div className="quizWrapper">
            <h1>Quiz stuff</h1>
            <div>
            </div>
            <div className = "quizData">
                {questions.map((question) => (
                    <div className = "quizItems">
                        <h1 className = "category" key = {categoryID}>{question.category}</h1>
                        <h1 className = "difficulty" key = {difficultyID}>{question.difficulty}</h1>
                        <h1 className = "quizType" key = {typeID}>{question.type}</h1>
                        <h1 className = "correctAnswer" key = {correctID}>{question.correct_answer}</h1>
                        <h1 className = "incorrectAnswer" key = {incorrectID}>{question.incorrect_answer}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Quiz;

