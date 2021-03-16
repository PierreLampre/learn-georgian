import React from 'react'
import Key from "./Key"
import "./keyboard.css"

const Keyboard = ({ type, backSpace }) => {
    return (
        <div className="keyboard">
            <div className="row row-1">
                <div className="sm key lg-screen"><label>`</label></div>
                <div className="sm key"><label>1</label></div>
                <div className="sm key"><label>2</label></div>
                <div className="sm key"><label>3</label></div>
                <div className="sm key"><label>4</label></div>
                <div className="sm key"><label>5</label></div>
                <div className="sm key"><label>6</label></div>
                <div className="sm key"><label>7</label></div>
                <div className="sm key"><label>8</label></div>
                <div className="sm key"><label>9</label></div>
                <div className="sm key"><label>0</label></div>
                <div className="sm key"><label>-</label></div>
                <div className="sm key lg-screen"><label>=</label></div>
                <div className="bksp key func lg-screen" onClick={() => backSpace()}><label>Backspace</label></div>
            </div>
            <div className="row row-2">
                <div className="tab key lg-screen"><label>Tab</label></div>
                <Key value={"ღ"} type={type} />
                <Key value={"ჯ"} type={type} />
                <Key value={"უ"} type={type} />
                <Key value={"კ"} type={type} />
                <Key value={"ე"} type={type} />
                <Key value={"ნ"} type={type} />
                <Key value={"ბ"} type={type} />
                <Key value={"შ"} type={type} />
                <Key value={"წ"} type={type} />
                <Key value={"ზ"} type={type} />
                <Key value={"ხ"} type={type} />
                <Key value={"ც"} type={type} />
                <div className="for-slash key lg-screen"><label>\</label></div>
            </div>
            <div className="row row-3">
                <div className="caps key lg-screen"><label>Caps Lock</label></div>
                <Key value={"ფ"} type={type} />
                <Key value={"ძ"} type={type} />
                <Key value={"ვ"} type={type} />
                <Key value={"თ"} type={type} />
                <Key value={"ა"} type={type} />
                <Key value={"პ"} type={type} />
                <Key value={"რ"} type={type} />
                <Key value={"ო"} type={type} />
                <Key value={"ლ"} type={type} />
                <Key value={"დ"} type={type} />
                <Key value={"ჟ"} type={type} />
                <div className="enter key lg-screen"><label>Enter</label></div>
            </div>
            <div className="row row-4">
                <div className="shift1 key lg-screen"><label>Shift</label></div>
                <Key value={"ჭ"} type={type} />
                <Key value={"ჩ"} type={type} />
                <Key value={"ყ"} type={type} />
                <Key value={"ს"} type={type} />
                <Key value={"მ"} type={type} />
                <Key value={"ი"} type={type} />
                <Key value={"ტ"} type={type} />
                <Key value={"ქ"} type={type} />
                <Key value={"ბ"} type={type} />
                <Key value={"ჰ"} type={type} />
                <div className="shift2 key lg-screen"><label>Shift</label></div>
            </div>
            <div className="row row-5">
                <div className="btm-sm key lg-screen"><label>Ctrl</label></div>
                <div className="btm-sm key lg-screen"><label>Win</label></div>
                <div className="btm-sm key lg-screen"><label>Alt</label></div>
                <div className="key func sm-screen bs2" onClick={() => backSpace()}>Backspace</div>
                <div className="space key func" onClick={() => type(" ")}><label>Space</label></div>
                <div className="key func sm-screen enter2">Enter</div>
                <div className="btm-sm key lg-screen"><label>Alt</label></div>
                <div className="btm-sm key lg-screen"><label>Fn</label></div>
                <div className="btm-sm key lg-screen"><label>Ctrl</label></div>
            </div>
        </div>
    )
}

export default Keyboard
