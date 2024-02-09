import React, { useState } from "react";
import '../ComponentsCss/Box.css';

function Box() {
    const [clicks, setClicks] = useState(0);
    const [colorChanged, setColorChanged] = useState([]);

    function ChangeColorAndCount() {
        const Rrandom = Math.floor(Math.random() * 250);
        const Grandom = Math.floor(Math.random() * 250);
        const Brandom = Math.floor(Math.random() * 250);        
        document.getElementById("MyButton").style.backgroundColor = `rgb(${Rrandom}, ${Grandom}, ${Brandom})`;
        setColorChanged([...colorChanged, [Rrandom, Grandom, Brandom]]);
        setClicks(clicks + 1);
    }

    return (
        <div>
            <p>Click me to change the color!</p>
            <button id="MyButton" className="MyButton" onClick={ChangeColorAndCount}>
            </button>
            <p>Times clicked: {clicks}</p>
            <p>Colors changed: {colorChanged.map((color, index) => (
                <span key={index} style={{ color: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}>
                    {`rgb(${color[0]}, ${color[1]}, ${color[2]}) , `}
                </span>
            ))}</p>
        </div>
    );
}

export default Box;
