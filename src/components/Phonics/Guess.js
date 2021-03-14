import React from 'react'

const Guess = ({ btnClassToggle, char, set, checkAnswer }) => {

    async function makeGuess() {
        set(char);
        await checkAnswer();
    }

    return (
        <button
            className={btnClassToggle}
            onClick={makeGuess}
        >
            {char}
        </button>
    )
}

export default Guess
