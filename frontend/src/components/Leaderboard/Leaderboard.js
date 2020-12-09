import React, { useEffect, useState } from "react";
import "./Leaderboard.css";
import axios from 'axios';
import { nanoid } from 'nanoid';
require("dotenv").config();

function Leaderboard() {
    const [Results, setResults] = useState([]);
    const [userID] = useState(nanoid);
    const [pointsID] = useState(nanoid);
    const [categoryID] = useState(nanoid);
    const [difficultyID] = useState(nanoid);
    const [typeID] = useState(nanoid);

    const getResults = async () => {
        await axios.post('http://localhost:5000/api/users/leaderboard').then((res) => {
            setResults(res.data.results);
        });
    };

    useEffect(() => {
        if (Results.length === 0) {
            getResults();
        } else {
            console.log(Results)
        }
    })

    return (

            <div className="table-wrapper">
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Score</th>
                            <th>Category</th>
                            <th>Difficulty</th>
                            <th>Quiz Type</th>
                            {/* <th>Time Taken</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {Results.map((result) => (
                            <tr className="quizItems">
                                <td className="user" key={userID}>{result.username}</td>
                                <td className="Points" key={pointsID}>{result.results.points}</td>
                                <td className="quizcategory" key={categoryID}>{result.results.category}</td>
                                <td className="difficulty" key={difficultyID}>{result.results.difficulty}</td>
                                <td className="quizType" key={typeID}>{result.results.quizType}</td>
                            </tr>
                        )).reverse()}
                    </tbody>
                </table>
            </div>
        
    );
}

export default Leaderboard;