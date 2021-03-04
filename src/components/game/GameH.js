import React, {useState} from 'react';
import Board from '../Board';
import {useHistory} from 'react-router-dom'
import { calculateWinner } from '../../helper';
const Game = () => {
    const history = useHistory()
  const [board, setBoard] = useState(Array(9).fill(null));
  const [whoIsNext, setwhoIsNext] = useState(localStorage.getItem("side") === "true");
  const winner = calculateWinner(board);
  const styles = {
    width: '200px',
    margin: '20px auto',
};
    const handleClick = (i) => {
      const boardCopy = [...board];
      // If user click an occupied square or if game is won, return
      if (winner || boardCopy[i]) return;
      // Put an X or an O in the clicked square
      console.log(whoIsNext)
      boardCopy[i] = whoIsNext ? 'X' : 'O';
      setwhoIsNext(!whoIsNext);
      setBoard(boardCopy);
    }
    const removeLocal = () => {
        localStorage.clear()
        history.push("")
      }
    
    return (
      <>
      {console.log(localStorage.getItem('enemy'))}
      <Board sq={board} onClick={handleClick} />
      <div style={styles}>
          <p style={{color: 'orange', fontWeight: 'bold'}}>{winner && 'Winner: ' + winner}</p>
          <p>{localStorage.getItem('enemy') === 'h' && 'Next Player: ' + (whoIsNext ? 'X' : 'O')}</p>
          <button id="new" onClick={() => setBoard(Array(9).fill(null))}>New Game</button>
          <button id="restart" onClick={() => removeLocal()}>Choose Side and Enemy</button>
      </div>
  </>
    )
}

export default Game;