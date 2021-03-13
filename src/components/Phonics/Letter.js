import React, { useState } from 'react'

const Letter = ({ letter, add, remove }) => {

    const [bool, setBool] = useState(false);

    function toggleSelection() {
        if (bool) {
            setBool(false);
            remove(letter);
        } else {
            setBool(true);
            add(letter);
        }
    }

    return (
        <button className={!bool ? "check-box" : "check-box chosen"} onClick={() => toggleSelection()}>
            {letter}
        </button>
    )
}

export default Letter
