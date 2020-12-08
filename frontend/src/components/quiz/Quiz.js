import React, { useEffect, useState } from "react";
import "./Quiz.css";
import axios from 'axios';
require("dotenv").config();

function Quiz() {
    const [questions, setQuestions] = useState([]);

    const getQuestions = async () => {
        let url = `https://opentdb.com/api.php?amount=10`;
        await axios.get(url).then((res) => {
            console.log(res.data.results);
            setQuestions(res.data.results);     
        });
    };

    useEffect(() => {
        if (questions.length == 0) {
            getQuestions();
        }
    })

    return (
        <div className="quizWrapper">
            <h1>Quiz stuff</h1>
            <div>
                <button onClick = {getQuestions}>Quiz!</button>
            </div>
            <div className = "quizData">
                {questions && questions.map((question, index) => {
                    <div className = "quizItems">
                        <h1 className = "category" key = {index}>{question}</h1>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Quiz;

