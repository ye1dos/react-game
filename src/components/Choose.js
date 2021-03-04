import React from "react";
import {useHistory } from "react-router-dom";
import './General.css'
const Choose = () => {
    const history = useHistory();
    const onClickSide = (a) => {
        localStorage.setItem('side', a)
        history.push('enemy')
    }
    return (
        <div className='scr'>
            <h1>Choose your side</h1>
            <button id="x_side" onClick={() => onClickSide(true)} type="button">X</button>
            <button id="o_side" onClick={() => onClickSide(false)} type="button">O</button>
        </div>
    )
}
export default Choose;