import React from 'react'
import "./start-button.css"

const StartButton = ({ toggle, label, f }) => {

    let theStyle;

    if (toggle === true) {
        theStyle = "start-btn"
    } else {
        theStyle = "disabled-btn"
    }

    console.log(toggle);

    let text = label

    return (
        <button className={theStyle} onClick={f}>
            {text}
        </button>
    )
}

export default StartButton
