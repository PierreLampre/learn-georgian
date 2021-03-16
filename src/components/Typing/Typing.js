import React, { useState } from 'react'
import Keyboard from "./Keyboard/Keyboard"
import KeyboardOutput from "./Keyboard/KeyboardOutput"
import "./typing.css"

const Typing = () => {

    const [msgString, setMsgString] = useState([]);

    function type(letter) {
        setMsgString([...msgString, letter]);
    }

    let joinedMsgString = msgString.join("")

    function backSpace() {
        if (msgString.length > 1) {
            joinedMsgString = joinedMsgString.substring(0, joinedMsgString.length - 1);
            setMsgString(joinedMsgString.split(""))
        } else {
            setMsgString([]);
        }
    }

    return (
        <div className="typing-container">
            <KeyboardOutput output={joinedMsgString} />
            <Keyboard type={type} backSpace={backSpace} />
        </div>
    )
}

export default Typing
