import React, { useState } from "react";

function Counter() {
    const [counter, setCounters] = useState(0);

    function CheckCliks(action) {
        if (action === "less") {
            setCounters(counter - 1);
        } else {
            setCounters(counter + 1);
        }
    }
    

    return (
        <div>
            <p>Easy Counter!</p>
            <p>Count: {counter}</p>
            <button id="BtnLess" onClick={() => CheckCliks("less")}>-</button>
            <button id="BtnMore" onClick={() => CheckCliks("more")}>+</button>

        </div>
    );
}

export default Counter;
