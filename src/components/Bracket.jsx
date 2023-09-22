import React, { useState } from 'react';
import Match from "./Match.jsx"

function Bracket({ players, onWinnerSelected }) {
    const [winners, setWinners] = useState(Array(players.length).fill(null));
  
    const generateMatches = (playerList) => {
      const matches = [];
      for (let i = 0; i < playerList.length; i += 2) {
        matches.push(
          <Match
            key={`match${i / 2}`}
            player1={playerList[i]}
            player2={playerList[i + 1]}
            onWinnerSelected={(winner, loser) => {
              const newWinners = [...winners];
              newWinners[i / 2] = winner;
              setWinners(newWinners);
              onWinnerSelected(newWinners, loser);
            }}
          />
        );
      }
      return matches;
    };
  
    return (
      <div>
        {generateMatches(players)}
      </div>
    );
  }
  


export default Bracket