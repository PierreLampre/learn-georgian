import React from 'react'

const Guess = ({ btnClassToggle, char, guess }) => {


    return (
        <button
            className={btnClassToggle}
            onClick={() => guess(char)}
        >
            {char}
        </button>
    )
}

export default Guess
