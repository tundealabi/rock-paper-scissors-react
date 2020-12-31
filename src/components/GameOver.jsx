import React from 'react';
import borderColor from '../helpers/border';

const style = {
    "border": "4px solid #5e5e5e",
    "paddingBottom": "1rem"
}

const GameOver = ({handleReplay,winner}) => {
    return (
        <div style={{...style,...borderColor(winner)}}>
            <h1>{winner === "human" ? "You Win!!!" : "You Lose!!!"}</h1>
            <button onClick={handleReplay} >Play Again</button>
        </div>
    )
}

export default GameOver;

