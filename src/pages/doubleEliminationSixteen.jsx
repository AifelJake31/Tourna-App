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

function Tournament() {
  const initialPlayers = [
    'Player1', 'Player2', 'Player3', 'Player4',
    'Player5', 'Player6', 'Player7', 'Player8',
    'Player9', 'Player10', 'Player11', 'Player12',
    'Player13', 'Player14', 'Player15', 'Player16',
    'Player17', 'Player18', 'Player19', 'Player20',
    'Player21', 'Player22', 'Player23', 'Player24',
    'Player25', 'Player26', 'Player27', 'Player28',
    'Player', 'Player30', 'Player31', 'Player32',
  ];

  const [winnersBracket, setWinnersBracket] = useState(initialPlayers);
  const [losersBracket, setLosersBracket] = useState([]);
  const [loserMatchupIndex, setLoserMatchupIndex] = useState(0);

  const handleWinnersBracketComplete = (winner, loser) => {
    setLosersBracket([...losersBracket, loser]);

    if (winnersBracket.length === 1) {
      alert(`Tournament Winner: ${winner}`);
    } else {
      const nextMatchupIndex = loserMatchupIndex + 1;
      setLoserMatchupIndex(nextMatchupIndex);
    }
  };

  return (
    <div>
      <h1>Double Elimination Tournament</h1>
      <h2>Winner's Bracket</h2>
      {winnersBracket.map((player, index) => {
        if (index % 2 === 0 && index < winnersBracket.length - 1) {
          return (
            <Match
              key={`match${index / 2}`}
              player1={winnersBracket[index]}
              player2={winnersBracket[index + 1]}
              onWinnerSelected={(winner, loser) => handleWinnersBracketComplete(winner, loser)}
            />
          );
        }
        return null;
      })}

      <h2>Loser's Bracket</h2>
      {losersBracket.map((player, index) => {
        if (index < loserMatchupIndex) {
          return (
            <Match
              key={`loserMatch${index}`}
              player1={player}
              player2={losersBracket[loserMatchupIndex - 1 - index]}
              onWinnerSelected={() => {}}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default Tournament;
