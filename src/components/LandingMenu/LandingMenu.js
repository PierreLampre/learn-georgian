import React from 'react'
import { Link } from "react-router-dom"
import "./landing-menu.css"

const LandingMenu = () => {
    return (
        <div className="landing-menu-container">
            <h1 className="logo">LEARN GEORGIAN</h1>
            <div className="btn-box">
                <Link className="link" to="/phonics">
                    <button className="game-btn full-width">Phonics</button>
                </Link>
                <Link className="link" to="/typing">
                    <button className="game-btn full-width">Typing</button>
                </Link>
                <Link className="link" to="/words-and-phrases">
                    <button className="game-btn full-width">Words and Phrases</button>
                </Link>
            </div>
            
        </div>
    )
}

export default LandingMenu
