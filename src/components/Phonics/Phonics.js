import React, { useState } from 'react'
import StartButton from "./StartButton"
import Letter from "./Letter"
import Guess from "./Guess"
import { charArr, no, yes } from "./charObjs"
import thumbsUp from "./img/thumbs-up.svg"
import thumbsDown from "./img/thumbs-down.svg"
import "./phonics.css"

const Phonics = () => {

    const [setup, setSetup] = useState(true);
    const [chosenChars, setChosenChars] = useState([]);
    const [playBtnMsgBool, setPlayBtnMsgBool] = useState(0);
    const [playBtnSoundBool, setPlayBtnSoundBool] = useState(false);
    const [currentTestSound, setCurrentTestSound] = useState(undefined);

    let btnClassToggle;

    function add(letter) {
        setChosenChars(chosenChars => [...chosenChars, letter]);
    }

    function remove(letter) {
        setChosenChars(chosenChars.filter(char => char !== letter)); 
    }

    if(chosenChars.length <= 12) {
        btnClassToggle = "char-btn lg";
    } else if (chosenChars.length <= 25) {
        btnClassToggle = "char-btn md";
    } else if (chosenChars.length > 25) {
        btnClassToggle = "char-btn sm";
    }

    function toSetup() {
        setSetup(true);
        setChosenChars([]);
        setPlayBtnMsgBool(0);
        setPlayBtnSoundBool(false);
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateRandomSound(bool) {

        if(!bool) {
            let randomSoundIndex = getRndInteger(0, chosenChars.length - 1);

            let randomLetter = chosenChars[randomSoundIndex];

            for (let i = 0; i < charArr.length; i++) {
                if(randomLetter === charArr[i].char) {
                    setCurrentTestSound(charArr[i]);
                }
            }
        }   
    }

    function toGame() {
        setSetup(false);
        generateRandomSound(playBtnSoundBool);
    }

    function playBtnPlus() {
        setPlayBtnMsgBool(1);
        currentTestSound.sound.play();
    }

    function guess(char) {
        if(char === currentTestSound.char) {
            yes.play();
            setPlayBtnMsgBool(0);
            generateRandomSound(playBtnSoundBool);
        } else {
            no.play();
        }
    }

    console.log(currentTestSound)


    return (
    <>
    {setup ? <div className="phonics">
            <h2 className="logo">Which letters do you want to practice?</h2>

            <div className="checkboxes">
                {charArr.map(el => (
                    <Letter key={el.char} letter={el.char} add={add} remove={remove} />
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
                    <label htmlFor="playButton" />Play</button>
                <img className="thumbs-down" src={thumbsDown} alt="thumbs down, try again" />
            </div>

            <h2 className="game-msg">{playBtnMsgBool > 0 ? "What do you hear?" : "Hit the play button to start"}</h2>

            <div id="answers" className="answers">
                {chosenChars.map(el => (
                    <Guess key={el + "2"}btnClassToggle={btnClassToggle} char={el} guess={guess}/>
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
