import React from 'react'
import "../App.css"

export default function doubleElimination() {
    return (
        <>
            {/* START FIRST LAYER */}
            <div className='flex w-screen'>
                <div className='w-[20%] text-center'></div>
                <div className='w-[20%] text-center'></div>
                <div className='w-[19.9%] text-center'>
                    <div className='w-[100%] border-black'>
                        <div className='w-[100%] h-[100%] border-black'></div>
                        <div className='w-[100%] h-[100%] border-r-2 border-black'></div>
                    </div>
                </div>
                <div className='w-[20.2%] flex flex-column justify-center text-center'>

                    <div className='w-[100%] flex'>

                        <div className='w-[100%] flex'>
                            <div className='flex flex-col items-center w-[15%]'>
                                <div className='w-[100%] border-b-2 border-black h-[50%]'></div>
                                <div className='w-[100%] border-l-2 border-black h-[50%] ml-[0.5px]'></div>
                            </div>
                            <div className='w-[70%] border border-black'>
                                <div className='w-[100%] border border-black'>Player 1</div>
                                <div className='w-[100%] border border-black'>Player 1</div>
                            </div>
                            <div className='flex flex-col items-center w-[15%]'>
                                <div className='w-[100%] border-b-2 border-black h-[50%]'></div>
                                <div className='w-[100%] border-r-2 border-black h-[50%] mr-[0.5px]'></div>
                            </div>
                        </div>


                    </div>



                </div>
                <div className='w-[19.9%] text-center'></div>
                <div className='w-[20%] text-center'></div>
                <div className='w-[20%] text-center'></div>
            </div>
            {/* END FIRST LAYER */}

            {/* START SECOND LAYER */}
            <div className='flex w-screen'>
                {/* FIRST */}
                <div className='w-[20%] text-center'></div>

                {/* SECOND */}
                <div className='w-[20%] text-center'></div>

                {/* THIRD */}
                <div className='w-[20%] text-center'>
                    <div className='w-[100%] flex'>

                        <div className='w-[100%] flex'>
                            <div className='flex items-center w-[15%]'>
                                <div className='w-[100%] text-[0.8rem] border border-black h-[1px]'>
                                </div>
                            </div>
                            <div className='w-[70%] border border-black'>
                                <div className='w-[100%] border border-black'>Player 1</div>
                                <div className='w-[100%] border border-black'>Player 1</div>
                            </div>
                            <div className='flex items-center w-[15%]'>
                                <div className='w-[100%] text-[0.8rem] border border-black h-[1px]'></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOURTH */}
                <div className='w-[20%] flex flex-column justify-center text-center border-x-2 border-black '>

                </div>

                {/* FIFTH */}
                <div className='w-[20%] text-center'>
                    <div className='w-[100%] flex'>

                        <div className='w-[100%] flex'>
                            <div className='flex items-center w-[15%]'>
                                <div className='w-[100%] text-[0.8rem] border border-black h-[1px]'></div>
                            </div>
                            <div className='w-[70%] border border-black'>
                                <div className='w-[100%] border border-black'>Player 1</div>
                                <div className='w-[100%] border border-black'>Player 1</div>
                            </div>
                            <div className='flex items-center w-[15%]'>
                                <div className='w-[100%] text-[0.8rem] border border-black h-[1px]'></div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* SIXTH */}
                <div className='w-[20%] text-center'></div>

                {/* SEVENTH */}
                <div className='w-[20%] text-center'></div>
            </div>

            {/* END SECOND LAYER */}

            {/* THIRD LAYER */}
            <div className='flex w-screen'>
                {/* FIRST */}
                <div className='w-[20%] text-center'></div>
                {/* SECOND */}
                <div className='w-[20%] text-center'></div>
                {/* THIRD */}
                <div className='w-[19.9%] text-center'></div>
                {/* FOURTH */}
                <div className='w-[20.2%] flex flex-column justify-center text-center'>

                    <div className='w-[100%] flex'>

                        <div className='w-[100%] flex'>
                            <div className='flex flex-col items-center w-[15%]'>
                                <div className='w-[100%] border-l-2 border-black h-[50%] ml-[0.5px]'></div>
                                <div className='w-[100%] border-t-2 border-black h-[50%]'></div>
                            </div>
                            <div className='w-[70%] border border-black'>
                                <div className='w-[100%] border border-black'>Player 1</div>
                                <div className='w-[100%] border border-black'>Player 1</div>
                            </div>
                            <div className='flex flex-col items-center w-[15%]'>
                                <div className='w-[100%] border-r-2 border-black h-[50%] '></div>
                                <div className='w-[100%] border-t-2 border-black h-[50%]'></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FIFTH */}
                <div className='w-[19.9%] text-center'></div>
                {/* SIXTH */}
                <div className='w-[20%] text-center'></div>
                {/* SEVENTH  */}
                <div className='w-[20%] text-center'></div>
            </div>
        </>
    )
}
