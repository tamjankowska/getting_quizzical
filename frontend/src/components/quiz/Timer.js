import React, { useEffect, useState } from 'react';

export default function Timer(props) {
    const [timeLeft, setTimeLeft] = useState(30);

    // useEffect(() => {
    //     if (timeLeft <= 30 && timeLeft >= 1) {
    //       const timer = setInterval(() => {
    //         setTimeLeft(timeLeft - 1);
    //       }, 1000);
    //       return () => clearInterval(timer);
    //     }
    //     if (timeLeft === 0) {
    //       console.log(questions[props.index +1])
    //       props.setIndex(props.index + 1);
    //       return;
    //     }
    //   });
    return(
        <h1 className="quiz-timeLeft">{timeLeft}</h1>
    )
}