import React, { useState } from "react";
import '../ComponentsCss/RealInput.css';

function RealInput() {
    const [text, setText] = useState("");
    const [typing, setTyping] = useState(false);

    function handleTextChange(event) {
        setText(event.target.value);
    }

    function handleTyping() {
        setTyping(true);
    }

    function handleTypingStopped() {
        setTyping(false);
    }

    return (
        <div>
            <p>Type whatever you want here: {typing ? 'Typing...' : ''}</p>
            <p>{text}</p>
            <input className="InputBox" type="text" value={text} onChange={handleTextChange} 
                onFocus={handleTyping} onBlur={handleTypingStopped} />
        </div>
    );
}

export default RealInput;


