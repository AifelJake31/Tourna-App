import React, { useState } from 'react';
import retrybtn from "../images/retrybtn.png";

const Modal = ({ isVisible, onClose }) => {
  const [p1Value, setP1Value] = useState("Player1");
  const [p2Value, setP2Value] = useState("Player2");

  const setWinnerP1 = () => {
    return setP1Value
  };

  const setWinnerP2 = () => {
    return setP2Value
  };

  if (!isVisible) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
      id='wrapper'
      onClick={handleClose} // Handle click on the backdrop
    >
      <div className='w-[400px] flex flex-col'>
        <button className='text-white txt-xl place-self-end' onClick={handleClose}>
          X
        </button>
        <div className='bg-gray border border-black p-2 rounded flex justify-center gap-4'>
          <div className='cols-span-1'>
            <img src={retrybtn} alt="retry-btn" className='h-[60px]' />
          </div>
          <div>
            <div className='font-bold'>CHOOSE THE WINNER</div>
            <div className='flex gap-2'>
              <div className='w-[50%] border-2 border-black flex justify-center items-center'
              onClick={setWinnerP1}>
                {p1Value}
              </div>
              <div className='w-[50%] border-2 border-black flex justify-center items-center'
              onClick={setWinnerP1}>
                {p2Value}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
