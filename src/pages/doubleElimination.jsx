import React, { useState } from "react";

function DoubleEliminationTournament() {
  const [winnersBracket, setWinnersBracket] = useState([]);
  const [winner, setWinner] = useState([])


  let mockData = [
    "jake",
    "jajake",
    "zed",
    "zeder",
    "sedder",
    "sed",
    "sed2",
    "sed3",
    "sed4",
    "sed5",
    "sed6",
    "sed7",
    "sed8",
    "sed9",
    "sed10",
    "sed11",
    "sed12",
    "sed13",
    "sed14",
    "sed15",
    "jake",
    "jajake",
    "zed",
    "zeder",
    "sedder",
    "sed",
    "sed2",
    "sed3",
    "sed4",
    "sed5",
    "sed6",
    "sed7",
    "sed8",
    "sed9",
    "sed10",
    "sed11",
    "sed12",
    "sed13",
    "sed14",
    "sed15",
    "jake",
    "jajake",
    "zed",
    "zeder",
    "sedder",
    "sed",
    "sed2",
    "sed3",
    "sed4",
    "sed5",
    "sed6",
    "sed7",
    "sed8",
    "sed9",
    "sed10",
    "sed11",
    "sed12",
    "sed13",
    "sed14",
    "sed15",
    "jake",
    "jajake",
    "zed",
    "zeder",
    "sedder",
    "sed",
    "sed2",
    "sed3",
    "sed4",
    "sed5",
    "sed6",
    "sed7",
    "sed8",
    "sed9",
    "sed10",
    "sed11",
    "sed12",
    "sed13",
    "sed14",
    "sed15",
    "jake",
    "jajake",
    "zed",
    "zeder",
    "sedder",
    "sed",
    "sed2",
    "sed3",
    "sed4",
    "sed5",
    "sed6",
    "sed7",
    "sed8",
    "sed9",
    "sed10",
    "sed11",
    "sed12",
    "sed13",
    "sed14",
    "sed15",
    "jake",
    "jajake",
    "zed",
    "zeder",
    "sedder",
    "sed",
    "sed2",
    "sed3",
    "sed4",
    "sed5",
    "sed6",
    "sed7",
    "sed8",
    "sed9",
    "sed10",
    "sed11",
    "sed12",
    "sed13",
    "sed14",
    "sed15",
    "sed8",
    "sed9",
    "sed10",
    "sed11",
    "sed12",
    "sed13",
    "sed14",
    "sed15",
    "sed12",
    "sed13",
    "sed14",
    "sed15",

  ];

  const initialWinnersPlayers = Array.from({ length: mockData.length / 2 }, (_, i) => `Player ${i + 1}`);
  const initialPlayers = mockData

  const createInitialWinnersBracket = () => {
    const matches = [];
    for (let i = 0; i < initialPlayers.length; i += 2) {
      matches.push([initialPlayers[i], initialPlayers[i + 1]]);
    }
    setWinnersBracket(matches);
  };

  const createWinnersBracket = () => {
    const matches = [];
    for (let i = 0; i < initialWinnersPlayers.length; i += 2) {
      matches.push([initialWinnersPlayers[i], initialWinnersPlayers[i + 1]]);
    }
    setWinner(matches); 
  };

  const startTournament = () => {
    createInitialWinnersBracket();
    createWinnersBracket()
  };

  return (
    <>

      <button onClick={startTournament}>Start Tournament</button> 

    
        <div className="grid grid-cols-3">

          {/* COLUMN 1 start */}
        <div className="">
          {winnersBracket.map((match, index) => (
            <div key={index}>
              <div className='flex w-[100%] h-[52px]'>
                <div className='w-[85%]'>
                  <div className='border-black border-2'>{match[0]}</div>
                  <div className='border-x-2 border-black border-b-2'>{match[1]}</div>
                </div>
                <div className='w-[15%]'>
                  <div className='h-[50%] border-r-2 border-black'></div>
                  <div className='h-[50%] border-t-2  border-black'></div>
                </div>
              </div>

              {/* SPACER */}
              <div className='h-[200px] w-[100%] border-black '></div>

            </div>
          ))}
          </div>

          {/* COLUMN 1 end */}

          {/* COLUMN 2 start */}

          <div className="">

          <div className='h-[110px]'></div>
            {
            winner.map((winners, index) => (

              <div key={index}>

                <div className='flex w-[100%] h-[52px]'>

                <div className='w-[15%]'>
                    <div className='h-[50%]'></div>
                    <div className='h-[50%] border-t-2 border-black'></div>
                  </div>

                  <div className='w-[85%]'>
                    <div className='border-black border-2'>{winners[0]}</div>
                    <div className='border-x-2 border-black border-b-2'>{winners[0]}</div>
                  </div>
          
                </div>

                {/* spacer */}
                <div className='h-[450px] pt-3'>
                
                </div>

            

                </div>

              ))
            }
          </div>
          
          <div></div>
        </div>


    
    </>
  );
}

export default DoubleEliminationTournament;
