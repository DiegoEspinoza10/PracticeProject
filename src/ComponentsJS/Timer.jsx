import React, { useState, useEffect } from "react";

function Timer() {
    const [time, setTime] = useState("");
    const [timeLeft, setTimeLeft] = useState(null);
    const [timerRunning, setTimerRunning] = useState(false);

    useEffect(() => {
        if (timerRunning && timeLeft > 0) {
            const countdown = setTimeout(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearTimeout(countdown);
        } else if (timerRunning && timeLeft === 0) {
            alert("Time's up!");
            setTimerRunning(false);
        }
    }, [timeLeft, timerRunning]);

    function updateTimer(event) {
        setTime(event.target.value );
    }

    function startTimer() {
        if (time !== "" && !isNaN(time)) {
            setTimeLeft(parseInt(time));
            setTimerRunning(true);
        } else {
            alert("Please enter a valid number for the timer.");
        }
    }

    function stopTimer() {
        setTimerRunning(false);
    }

    return (
        <div>
            <p>Set a timer of: {time}</p>
            <input className="Timer" type="text" value={time} onChange={updateTimer} />
            {!timerRunning ? <button className="Start" onClick={startTimer}>Start timer</button> :
                             <button className="Stop" onClick={stopTimer}>Stop timer</button>}
            <p>{timeLeft !== null ? `Time left: ${timeLeft} seconds` : null}</p>
        </div>
    );
}

export default Timer;

