import React, { useState } from "react";
import '../ComponentsCss/RealInput.css';

function RealInput() {
    const [text, setText] = useState("");

    function handleTextChange(event) {
        setText(event.target.value);
    }

    return (
        <div>
            <p>Type whatever you want here: {text}</p>
            <input className="InputBox" type="text" value={text} onChange={handleTextChange} />
        </div>
    );
}

export default RealInput;

