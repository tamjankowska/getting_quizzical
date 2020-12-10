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
    const [searchCategory, setSearchCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [type, setType] = useState('');

    const getResults = async () => {
        await axios.post('http://localhost:5000/api/users/leaderboard').then((res) => {
            // setResults(res.data.results);
            setResults(res.data.results.flatMap((user) => {return user.results.map((result) => {
                result.username = user.username;
                return result
            })}).sort((Results, result) => {return result.points - Results.points}));
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
                            <th>Category<br/>
                                <input type="text" placeholder="Search Category..." onChange={event => {setSearchCategory(event.target.value)}}></input>
                            </th>
                            <th>Difficulty<br/>
                                <select name='difficulty' onChange={event => {setDifficulty(event.target.value)}}>
                                    <option value="" selected>All</option>
                                    <option value='Easy'>Easy</option>
                                    <option value='Moderate'>Moderate</option>
                                    <option value='Hard'>Hard</option>
                                </select>
                            </th>
                            <th>Quiz Type<br/>
                                <select name='type' onChange={event => {setType(event.target.value)}}>
                                    <option value="" selected>All</option>
                                    <option value='True/False'>True/False</option>
                                    <option value='Multiple Choice'>Multiple Choice</option>
                                </select>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {Results.filter((result) => {
                            // C D T
                            // 0 0 0 :)
                            // 0 0 1 :)
                            // 0 1 0 :)
                            // 0 1 1 :)
                            // 1 0 0 :)
                            // 1 0 1 :)
                            // 1 1 0 :)
                            // 1 1 1 :)
                            if ((result.quizType.toLowerCase().includes(type.toLowerCase()))
                                        && !difficulty
                                        && !searchCategory) {
                                return result
                            } else if (!type
                                        && (result.difficulty.toLowerCase().includes(difficulty.toLowerCase()))
                                        && !searchCategory) {
                                return result
                            } else if ((result.quizType.toLowerCase().includes(type.toLowerCase()))
                                        && (result.difficulty.toLowerCase().includes(difficulty.toLowerCase()))
                                        && !searchCategory) {
                                return result
                            } else if (!type
                                        && (result.difficulty.toLowerCase().includes(difficulty.toLowerCase()))
                                        && (result.category.toLowerCase().includes(searchCategory.toLowerCase()))) {
                                return result
                            } else if ((result.quizType.toLowerCase().includes(type.toLowerCase()))
                                        && !difficulty
                                        && (result.category.toLowerCase().includes(searchCategory.toLowerCase()))) {
                                return result    
                            } else if (!type
                                        && !difficulty
                                        && (result.category.toLowerCase().includes(searchCategory.toLowerCase()))) {
                                return result
                            } else if ((result.quizType.toLowerCase().includes(type.toLowerCase()))
                                        && (result.difficulty.toLowerCase().includes(difficulty.toLowerCase()))
                                        && (result.category.toLowerCase().includes(searchCategory.toLowerCase()))) {
                                return result
                            } else if (!type && !difficulty && !searchCategory) {return result}

                        }).map((result) => (
                            <tr className="quizItems">
                                <td className="user" key={userID}>{result.username}</td>
                                <td className="Points" key={pointsID}>{result.points}</td>
                                <td className="quizcategory" key={categoryID}>{result.category}</td>
                                <td className="difficulty" key={difficultyID}>{result.difficulty}</td>
                                <td className="quizType" key={typeID}>{result.quizType}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        
    );
}

export default Leaderboard;