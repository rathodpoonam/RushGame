import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ imageSrc }) => {
    return (
        <div className="flex  w-full pt-5 flex-row items-end justify-between mb-[145px]">
            <div className="w-1/2 flex flex-col text-center items-start justify-start h-full pb-7">
                <div className="items-start justify-start text-left mb-12">
                    <p className="font-rubik font-extrabold text-[45px] leading-[54px] text-10green">₹10 Crore+</p>
                    <div className="flex flex-row items-center">
                        <span className="font-montserrat font-bold text-2xl leading-[39px]" style={{
                            background: 'linear-gradient(85.98deg, #FFE974 10.89%, #D06CFF 91.16%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: '#fff0',
                            backgroundClip: 'text'
                        }}>
                            Daily Winnings in Real Cash Games
                        </span>
                    </div>
                </div>
                <div className="font-montserrat font-bold text-2xl leading-7 text-slate-500 mb-12">
                    <p>Download App & Get ₹50 free!</p>
                </div>

                <div className="flex flex-col items-start">
                    <div className="flex flex-row items-center space-x-5 mb-12">
                        <div className="p-[1px] rounded-100px bg-custom-radial">
                            <div className="flex flex-row justify-between items-center h-[60px] bg-dropPurple backdrop-blur-25 rounded-100px py-5 px-10 pr-4">
                                <div className="font-montserrat font-bold text-xs leading-[15px] text-center text-white whitespace-nowrap tracking-tightest pr-1">+91 -</div>
                                <input
                                    type="text"
                                    placeholder='Enter Mobile Number'
                                    maxLength='10'
                                    autoComplete='off'
                                    className='bg-custom-transparent-white text-white border-none outline-none focus:outline-none w-full'
                                />
                            </div>
                        </div>
                        <div className="flex w-60 h-[60px] rounded-100px font-montserrat text-sm font-bold leading-4 items-center justify-center tracking-tightest text-white bg-custom-gradient1 shadow-custom-shadow border border-custom-white-alpha">
                            <Link to=''>
                            
                            <button className="text-lg">Get Download Link</button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-row font-montserrat font-thin text-sm leading-5 items-center justify-between text-white text-opacity-70 space-x-4">
                        <div className="flex flex-col space-x-2 items-center justify-center h-full space-y-2">
                            <div className="flex flex-row space-x-[8px] items-center">
                                <div className="w-4 h-auto">
                                    <img src="star.png" alt="" />
                                </div>
                                <div className="text-lg leading-6">
                                    <p>4.4</p>
                                </div>
                            </div>
                            <div className="">
                                <p className='text-sm'>Ratings</p>
                            </div>
                        </div>
                        <div className="w-[1px] h-[38px] bg-slate-500"></div>

                        <div className="flex flex-col space-x-2 items-center justify-center h-full space-y-2">
                            <div className="flex flex-row space-y-[8px] items-center">
                                <div className="text-lg leading-5">
                                    <p>5 Crore+</p>
                                </div>
                            </div>
                            <div className="flex items-center m-0">
                                <p className='text-sm'>Player</p>
                            </div>
                        </div>
                        <div className="w-[1px] h-[38px] bg-slate-500"></div>

                        <div className="flex flex-col space-x-2 items-center justify-center h-full space-y-2">
                            <div className="flex flex-row justify-between space-x-[20px]">
                                <img src="android-apk.png" alt="" className="h-6" />
                                <img src="apple-logo.png" alt="" className="h-6" />
                            </div>
                            <div className="flex items-center m-0">
                                <p className='text-sm'>Available on</p>
                            </div>
                        </div>
                        <div className="w-[1px] h-[38px] bg-slate-500"></div>

                        <div className="flex flex-row gap-[12px] justify-center items-center h-full">
                            <img src="qr-code.png" alt="" className="w-10" />
                            <div className="text-sm w-[90px] text-start">
                                <p>Download via QR Code</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="items-end w-1/2  ">
                <img src={imageSrc} alt="" className="w-full h-auto object-cover" />
            </div>
        </div>
    );
}

export default HeroSection;
