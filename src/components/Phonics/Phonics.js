import React, { useState } from 'react'
import StartButton from "./StartButton"
import thumbsUp from "./img/thumbs-up.svg"
import thumbsDown from "./img/thumbs-down.svg"
import "./phonics.css"

const Phonics = () => {

    const [setup, setSetup] = useState(true);
    const [chosenChars, setChosenChars] = useState([]);
    const [playBtnBool, setPlayBtnBool] = useState(0);

    const charArr = [
        { char: "ა" }, { char: "ბ" }, { char: "გ" }, { char: "დ" }, { char: "ე" }, { char: "ვ" }, { char: "ზ" }, { char: "თ" }, { char: "ი" },
        { char: "კ" }, { char: "ლ" }, { char: "მ" }, { char: "ნ" }, { char: "ო" }, { char: "პ" }, { char: "ჟ" }, { char: "რ" }, { char: "ს" }, { char: "ტ" },
        { char: "უ" }, { char: "ფ" }, { char: "ქ" }, { char: "ღ" }, { char: "ყ" }, { char: "შ" }, { char: "ჩ" }, { char: "ც" }, { char: "ძ" }, { char: "წ" },
        { char: "ჭ" }, { char: "ხ" }, { char: "ჯ" }, { char: "ჰ" }
    ]

    function handleChange(e) {
        if(e.target.checked === true) {
            setChosenChars(chosenChars => [...chosenChars, e.target.value]);
        } else {
            setChosenChars(chosenChars.filter(char => char !== e.target.value));
        }
    }

    console.log(chosenChars);

    function toGame() {
        setSetup(false);
    }

    function toSetup() {
        setSetup(true);
        setChosenChars([]);
        setPlayBtnBool(0);
    }

    function playBtnPlus() {
        setPlayBtnBool(1);
    }

    return (
    <>
    {setup ? <div className="phonics">
            <h1 className="logo">Which letters do you want to practice?</h1>

            <div className="checkboxes">
                {charArr.map(el => (
                    <div className="check-box" key={el.char}>
                        <input type="checkbox" className="letters" value={el.char} onChange={(e) => handleChange(e)} />
                        <label htmlFor={el.char}>{el.char}</label>
                    </div>
                ))}
            </div>
            <StartButton 
                toggle={chosenChars.length < 1 ? false : true}
                label={chosenChars.length < 1 ? "Choose Letters" : "Alright, Let's Go"}
                f={chosenChars.length < 1 ? null : toGame}
            />
        </div>
    :
        <div className="phonics game">
            <div className="button-box">
                <img className="thumbs-up" src={thumbsUp} alt="thumbs up, correct answer" />
                <button type="button" className="play-btn" id="playButton" value="playButton"
                    onClick={() => playBtnPlus()}>
                    <label for="playButton" />Play</button>
                <img className="thumbs-down" src={thumbsDown} alt="thumbs down, try again" />
            </div>

            <h2>{playBtnBool > 0 ? "What do you hear?" : "Hit the play button to start"}</h2>

            <div id="answers" className="answers">
                {chosenChars.map(el => (
                    <button className="char-btn">{el}</button>
                ))}
            </div>
                <button 
                    className="game-btn"
                    onClick={() => toSetup()}
                >
                        Pick New Letters
                </button>
        </div>
    }
    </>
    )
}

export default Phonics
