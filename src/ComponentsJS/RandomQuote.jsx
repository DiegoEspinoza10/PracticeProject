import React, { useState } from "react";

function RandomQuote() {

    const quotes = [
        "In order to have a good day, you have to have a good mindset",
        "The real strength is in the mind",
        "The only way to do great work is to love what you do",
        "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will"
    ];

    const total = quotes.length;
    const [phrase, setPhrase] = useState("");
    const [number, setNumber] = useState(0);

    function changePhrase() {
        if (number < total - 1) {
            setPhrase(quotes[number]);
            setNumber(number + 1);
        } else {
            setPhrase(quotes[0]);
            setNumber(0);
        }
    }

    return (
        <div>
            <p>Random quote generator</p>
            <button onClick={changePhrase}>Generate Quote</button>
            <p>{phrase}</p>
        </div>
    );
}

export default RandomQuote;



