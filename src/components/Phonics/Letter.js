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
        <div className={!bool ? "check-box" : "check-box chosen"} onClick={() => toggleSelection()}>
            {letter}
        </div>
    )
}

export default Letter
