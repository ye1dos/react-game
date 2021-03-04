import React from 'react'
import GameC from './GameC'
import GameH from './GameH'
import '../General.css'
const Game = () => {
    return (
        <>
        {localStorage.getItem('enemy') === 'h' ? <GameH/> : <GameC/>}
        </>
        
    )
}
export default Game;