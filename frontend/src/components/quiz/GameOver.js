import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

function GameOver(props) {

    let history = useHistory();

    const saveResults = async () => {
        await axios.post('api/results/save', {
          userID: sessionStorage.getItem('userID'),
          username: sessionStorage.getItem('username'),
          points: props.points,
          category: props.category,
          quizType: props.type,
          difficulty: props.difficulty,
          quizTakenAt: Date.now()
        }).then((res) => {
          if (res.data.status == 'OK') {
            //   props.setResultsSent(true)
            alert('Results added to user history and leaderboard! 👌 ')
          } else {
            alert('Error saving results. Sorry, please try again! 😢 ')
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    const restartQuiz = (event) => {
      history.go(0)
      props.setQuizStarted(false);
    } 

    // useEffect(() => {
    //     if (props.resultsSent === true) {
    //         sessionStorage.removeItem('difficulty');
    //         sessionStorage.removeItem('category');
    //         sessionStorage.removeItem('type');
    //         sessionStorage.removeItem('quizTakenAt');
    //     }
    // }) 

    return (
        <div className = "game-over-container">
            <svg>
                <defs>
                    <filter id="stroke">
                        <feMorphology operator="dilate" radius="1" in="SourceGraphic" result="outside" />
                        <feMorphology operator="dilate" radius="2" in="outside" result="thickened" />
                        <feComposite operator="out" in2="SourceGraphic" in="thickened" result="stroke"/>
                    </filter>
                    <filter id="inner-glow" >
                        <feFlood flood-color="#e10b8d"/>
                        <feComposite in2="SourceAlpha" operator="out"/>
                        <feGaussianBlur stdDeviation="0.5" result="blur"/>
                        <feComposite operator="atop" in2="SourceGraphic"/>
                    </filter>
                    <filter id="outer-glow">
		                <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
		                <feGaussianBlur in="thicken" stdDeviation="5" result="blurred" />
		                <feFlood  flood-color="#db0273" result="glowColor" />
		                <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
		                <feMerge>
			                <feMergeNode in="softGlow_colored"/>
			                <feMergeNode in="SourceGraphic"/>
		                </feMerge>
                    </filter>
                    <filter id="outer-glow1">
		                <feMorphology operator="dilate" radius="20" in="SourceAlpha" result="thicken" />
		                <feGaussianBlur in="thicken" stdDeviation="25" result="blurred" />
		                <feFlood  flood-color="#530139" result="glowColor" />
		                <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
		                <feMerge>
			                <feMergeNode in="softGlow_colored"/>
			                <feMergeNode in="SourceGraphic"/>
		                </feMerge>
                    </filter>
                </defs>
                </svg>
                <div className="game-over-text">
                    <div className="neon">Game over!</div>
                </div>
                <div className = "restart-quiz-container">
                    <button id="restartQuiz" value="restartQuiz" onClick={restartQuiz}>Play another round?</button>
                </div>
        </div>
    )
}

export default GameOver;
