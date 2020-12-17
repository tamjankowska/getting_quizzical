import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';

function GameOver(props) {

    let history = useHistory();

    const saveResults = async () => {
        await axios.post('api/results/save', {
          userID: sessionStorage.getItem('userID'),
          username: sessionStorage.getItem('username'),
          points: props.points,
          category: sessionStorage.getItem('category'),
          quizType: sessionStorage.getItem('quizType'),
          difficulty: sessionStorage.getItem('difficulty'),
          quizTakenAt: sessionStorage.getItem('quizTakenAt')
        }).then((res) => {
          if (res.data.status == 'OK') {
            history.go(0);
            Swal.fire({
              title: 'Results added to user history and leaderboard! 👌',
              imageUrl: 'https://i.gifer.com/9xdB.gif',
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: 'Man on exercise bike with Olivia Newton John',
              confirmButtonColor: '#C4F43C'
            });
          } else {
            Swal.fire({
              title: 'Error saving results. Sorry, please try again! 😢',
              imageUrl: 'https://media0.giphy.com/media/5EftpGR63iNgY/giphy.gif',
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: 'Olivia Newton John looking surprised',
              confirmButtonColor: '#C4F43C'
            });
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    const restartQuiz = (event) => {
      history.go(0)
    } 

    useEffect(() => {
      if (props.quizEnded === true) {
        saveResults();
      }
    })

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
