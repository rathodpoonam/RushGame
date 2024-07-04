import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div>
            <div className="md:flex w-full h-16 top-0 bg-transparent left-0 px-[8%] z-20 items-center fixed">
                <div className='text-center pt-2.5 justify-between flex items-center w-full'>
                    <div className='w-32 h-12 pt-2'>
                        <img alt='logo' src='rush-logo.png' />
                    </div>
                    <div className="">
                        <div className="flex flex-row justify-center items-center">
                            <div className="star_rating flex flex-row items-center justify-center  ">
                                <img src="green_star.png" alt=""  className='w-5 h-5 mx-1' />
                                <p className='font-extrabold  text-[18px] leading-5 flex  items-center text-right text-customGreen font-montserrat mx-1'>4.4</p>
                                <p className='font-thin  text-[16px] leading-5 flex  items-center text-right text-slate-300 font-montserrat'>/ 5</p>
                            </div>
                            {/* <div className=''> */}
                            <div className="flex justify-between rounded-full font-montserrat items-center text-center pl-4 bg-custom-transparent-white  ">
                                <img src="tds_language_icon.png" className='w-8 h-8' alt="language icon" />


                            </div>
                            {/* </div> */}
                            <div className="flex items-center space-x-6 pl-4 ">
                                <img
                                    src={menuVisible ? '/cross.png' : '/HamburgerIcon.png'}
                                    alt='menu icon'
                                    className='w-8 h-8  cursor-pointer z-30'
                                    onClick={toggleMenu}
                                />
                            </div>

                        </div>

                        <div className={`fixed inset-0 transition-all ease-in-out md:relative md:top-0 md:left-auto md:flex space-x-6 ${menuVisible ? 'block' : 'hidden'}`}>
                            {menuVisible && (
                                <div className="fixed inset-0 bg-black bg-opacity-45 backdrop-blur-sm z-10" onClick={toggleMenu}></div>
                            )}
                            <div className="fixed right-0 top-0 bg-dropPurple h-screen w-[45%] rounded-l-2xl p-7 z-20">

                                <ul className='flex flex-col md:flex-row md:space-x-6 w-full h-full pt-14'>
                                    <li className='relative mb-4 md:mb-0'>
                                        <p
                                            className="text-white text-sm font-montserrat flex items-center cursor-pointer"
                                        >
                                            All Games
                                        </p>
                                    </li>
                                    <li className='flex items-center space-x-2 mb-4 md:mb-0'>
                                        <p className='text-sm text-white text-opacity-70 font-montserrat'>Refer & Earn</p>
                                    </li>
                                    <li className='flex items-center space-x-2 mb-4 md:mb-0'>
                                        <p className='text-sm font-montserrat text-white text-opacity-70'>FAQ's</p>
                                    </li>
                                    <li className='flex items-center space-x-2 mb-4 md:mb-0'>
                                        <p className='text-sm font-montserrat text-white text-opacity-70'>LUDO TOURNAMENT</p>
                                        <div className='bg-red-500 rounded-md font-rubik font-bold text-[9px] leading-3 flex items-center justify-center text-center text-white px-1 uppercase'>new</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
