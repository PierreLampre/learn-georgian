import React, { useDebugValue, useState } from 'react'
import "./phonics.css"

const Phonics = () => {

    const [setup, setSetup] = useState(true);

    let charArr = [
        { char: "ა" }, { char: "ბ" }, { char: "გ" }, { char: "დ" }, { char: "ე" }, { char: "ვ" }, { char: "ზ" }, { char: "თ" }, { char: "ი" },
        { char: "კ" }, { char: "ლ" }, { char: "მ" }, { char: "ნ" }, { char: "ო" }, { char: "პ" }, { char: "ჟ" }, { char: "რ" }, { char: "ს" }, { char: "ტ" },
        { char: "უ" }, { char: "ფ" }, { char: "ქ" }, { char: "ღ" }, { char: "ყ" }, { char: "შ" }, { char: "ჩ" }, { char: "ც" }, { char: "ძ" }, { char: "წ" },
        { char: "ჭ" }, { char: "ხ" }, { char: "ჯ" }, { char: "ჰ" }
    ]

    function toGame() {
        setSetup(false);
    }

    function toSetup() {
        setSetup(true);
    }

    return (
    <>
    {setup ? <div className="phonics">
            <h1 className="logo">Which letters do you want to practice?</h1>

            <div className="checkboxes">
                {charArr.map(el => (
                    <div className="check-box">
                        <input type="checkbox" className="letters" value={el.char} />
                        <label for={el.char}>{el.char}</label>
                    </div>
                ))}
            </div>
            <button 
                className="game-btn"
                onClick={() => toGame()}
            >
                    Alright, Let's Go
            </button>
        </div>
    :
        <div className="phonics">
            A game to go here.
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
