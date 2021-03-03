import React from 'react';
import Square from './Square';
const style = {
    border: '4px solid',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({ sq, onClick }) => (
    <div style={style}>
        {sq.map((sq1, i) => (
            <Square key={i} value={sq1} onClick={() => onClick(i)} />
        ))}
    </div>
)

export default Board;