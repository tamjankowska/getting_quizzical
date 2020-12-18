import React, { useEffect, useState } from "react";
import "./UserHistory.css";
import "./MQuserHistory.css";
import axios from 'axios';
import { nanoid } from 'nanoid';


function UserHistory() {
    const [results, setResults] = useState([]);
    const [pointsID] = useState(nanoid);
    const [categoryID] = useState(nanoid);
    const [difficultyID] = useState(nanoid);
    const [typeID] = useState(nanoid);
    const [searchCategory, setSearchCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [type, setType] = useState('');

    const getResults = async () => {
        let userID = sessionStorage.getItem('userID');
        await axios.post(`api/results/user/`, {id: userID}).then((res) => {
            setResults(res.data.results)
        }).catch((err) => {
            console.log(err)
        })
    };

    useEffect(() => {
        if (results.length === 0) {
            getResults();
        }
    })

    return (        
        <div className="table-wrapper-uh">

            <table className="content-table">
                <thead>
                    <tr>
                        <th>Score</th>
                        <th>Category<br />
                            <input type="text" placeholder="Search Category..." onChange={event => { setSearchCategory(event.target.value) }}></input>
                        </th>
                        <th>Difficulty<br />
                            <select name='difficulty' onChange={event => { setDifficulty(event.target.value) }}>
                                <option value="" selected>All</option>
                                <option value='Easy'>Easy</option>
                                <option value='Medium'>Medium</option>
                                <option value='Hard'>Hard</option>
                            </select>
                        </th>
                        <th>Quiz Type<br />
                            <select name='type' onChange={event => { setType(event.target.value) }}>
                                <option value="" selected>All</option>
                                <option value='Boolean'>Boolean</option>
                                <option value='Multiple'>Multiple</option>
                            </select>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {results.length ? "" : <p id="no-quizztory-p">You have no quiz history! <a href="/quiz" id="play-quiz-link">Click here</a> to play your first quiz!</p>}
                    {results.filter((result) => {
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
                        } else if (!type && !difficulty && !searchCategory) { return result } else {}

                    }).map((result) =>  (
                        <tr className="tableItems">
                            <td className="Points" key={pointsID}>{result.points}</td>
                            <td className="quizcategory" key={categoryID}>{result.category.replace(9, 'General Knowledge')
                                        .replace(10, 'Entertainment: Books')
                                        .replace(11, 'Entertainment: Film')
                                        .replace(12, 'Entertainment: Music')
                                        .replace(13, 'Musicals & Theatres')
                                        .replace(14, 'Entertainment: Television')
                                        .replace(15, 'Entertainment: Video Games')
                                        .replace(16, 'Entertainment: Board Games')
                                        .replace(17, 'Science & Nature')
                                        .replace(18, 'Science: Computers')
                                        .replace(19, 'Science: Mathematics')
                                        .replace(20, 'Mythology')
                                        .replace(21, 'Sports')
                                        .replace(22, 'Geography')
                                        .replace(23, 'History')
                                        .replace(24, 'Politics')
                                        .replace(25, 'Art')
                                        .replace(26, 'Celebrities')
                                        .replace(27, 'Animals')
                                        .replace(28, 'Vehicles')
                                        .replace(29, 'Entertainment: Comics')
                                        .replace(30, 'Science: Gadgets')
                                        .replace(31, 'Japanese Anime & Manga')
                                        .replace(32, 'Entertainment: Cartoon & Animations')}</td>
                            <td className="difficulty" key={difficultyID}>{result.difficulty}</td>
                            <td className="quizType" key={typeID}>{result.quizType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserHistory;