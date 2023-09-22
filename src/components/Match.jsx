import React, { useState } from 'react';


function Match({ player1, player2, onWinnerSelected }) {
    const [winner, setWinner] = useState(null);
    const [loser, setLoser] = useState(null);
  
    const handleWinnerSelected = (player) => {
      const loser = player === player1 ? player2 : player1;
      setWinner(player);
      setLoser(loser);
      onWinnerSelected(player, loser);
    };
  
    return (
      <div>
        <div>{player1} vs {player2}</div>
        {winner === null ? (
          <>
            <button onClick={() => handleWinnerSelected(player1)}>Select {player1} as winner</button>
            <button onClick={() => handleWinnerSelected(player2)}>Select {player2} as winner</button>
          </>
        ) : (
          <div>
            Winner: {winner}
            {loser && <div>Loser: {loser}</div>}
          </div>
        )}
      </div>
    );
  }


export default Match;