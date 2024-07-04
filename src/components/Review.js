import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Review = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [secondPlay, setSecondPlay] = useState(false);

    const handleImageClick = () => {
        setIsPlaying(true);
    };

    const handleSecondPlay = () => {
        setSecondPlay(true);
    };

    return (
        <div>
            <div className="flex flex-col w-full">
                <div className="font-montserrat font-thin text-lg md:text-2xl text-center uppercase text-customGreen text-opacity-100">OUR PLAYERS</div>
                <div className="font-montserrat font-bold md:text-[32px] text-3xl leading-[39px] text-center"
                    style={{
                        background: 'linear-gradient(85.98deg, #FFE974 10.89%, #D06CFF 91.16%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                    Trust Rush App
                </div>
                <div className="md:px-[50px] py-0">
                    <p className='font-montserrat font-thin md:text-xl text-sm leading-6 text-center text-slate-600 mt-5'>
                        Play
                        <Link to="/"> real money games</Link>
                        in India on highly trusted money game app Rush. Check out reviews from real users below.
                    </p>
                </div>
                <div className="flex flex-col ">
                    <div className="w-full">
                        <div className="w-full h-auto mt-[60px]">
                            <img src="main-rating-img.png" alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center mt-10">
                            <div className="font-montserrat font-bold text-sm leading-[20px] flex items-center text-center text-yellow-400">So does Rush players 🤗</div>
                            <div className="grid grid-cols-2 gap-4 items-center justify-center w-full mt-10 mb-16">
                            <div className="col-span-1 relative" onClick={handleImageClick} style={{ paddingTop: '56.25%' }}>
                                    {!isPlaying && (
                                        <img src="kiku_youtube.png" alt="Kiku Youtube" className="absolute top-0 left-0 w-full h-full rounded-[20px]" />
                                    )}
                                    {isPlaying && (
                                        <iframe
                                            src="https://www.youtube.com/embed/7lPai2mpXWQ?autoplay=1&rel=0"
                                            title="Kiku YouTube Video"
                                            scrolling='no'
                                            frameBorder={0}
                                            loading="eager"
                                            allow="autoplay"
                                            className="absolute top-0 left-0 w-full h-full rounded-[20px] opacity-100 border-20 border-t-1 border-solid border-opacity-25 border-brand-gray box-border"
                                        ></iframe>
                                    )}
                                </div>
                                <div className="col-span-1 relative" onClick={handleSecondPlay} style={{ paddingTop: '56.25%' }}>
                                    {!secondPlay && (
                                        <img src="satish_youtube.png" alt="Satish Youtube" className="absolute top-0 left-0 w-full h-full rounded-[20px]" />
                                    )}
                                    {secondPlay && (
                                        <iframe
                                            src="https://www.youtube.com/embed/2T2hotPQQ_8?autoplay=1&rel=0"
                                            title="Satish YouTube Video"
                                            loading="eager"
                                            allow="autoplay"
                                            frameBorder={0}
                                            className="absolute top-0 left-0 w-full h-full rounded-[20px] opacity-100 border-20 border-t-1 border-solid border-opacity-25 border-brand-gray box-border"
                                        ></iframe>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="font-montserrat font-bold text-sm flex justify-center items-center text-center text-yellow-400">Kiku & Satish love ❤️ Rush App</div>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 flex-row items-start justify-between flex-wrap mt-[60px] w-full">
                {/* Card 1 */}
                <div className="col-span-1 h-auto bg-card-review rounded-[20px] px-5 py-5 flex-col mb-[10px]">
                    <div className="bg-customPurple bg-opacity-60 rounded-2xl px-4 py-4 min-h-28 mb-4">
                        <p className='font-montserrat font-medium text-[13px] leading-5 text-yellow-400'>I earned ₹1 Lakh from this game. I quickly withdrew the winnings to my bank account. It is safe & easy to use app.</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-center items-start text-start py-1 px-3">
                            <div className="user-name flex flex-row mt-2 items-center">
                                <p className='font-montserrat font-semibold text-base leading-5 text-white'>
                                    Vishal Gupta
                                </p>
                                <img src="verify.png" alt="" className='w-auto h-[15px]' />
                            </div>
                            <p className='font-montserrat font-semibold text-[12px] leading-[15px] text-customGreen text-opacity-90'>Won ₹3,12,856</p>
                            <p className='font-montserrat font-semibold text-[12px] leading-[15px] text-slate-600'>Bhadohi, Uttar Pradesh</p>
                        </div>
                        <div>
                            <img src="user-1.png" alt="" className='w-20 h-auto' />
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="col-span-1 h-auto bg-card-review rounded-[20px] px-5 py-5 flex-col mb-[10px]">
                    <div className="bg-customPurple bg-opacity-60 rounded-2xl px-4 py-4 min-h-28 mb-4">
                        <p className='font-montserrat font-medium text-[13px] leading-5 text-yellow-400'>I earned ₹1 Lakh from this game. I quickly withdrew the winnings to my bank account. It is safe & easy to use app.</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-center items-start text-start py-1 px-3">
                            <div className="user-name flex flex-row mt-2 items-center">
                                <p className='font-montserrat font-semibold text-base leading-5 text-white'>
                                    Vishal Gupta
                                </p>
                                <img src="verify.png" alt="" className='w-auto h-[15px]' />
                            </div>
                            <p className='font-montserrat font-semibold text-[12px] leading-[15px] text-customGreen text-opacity-90'>Won ₹3,12,856</p>
                            <p className='font-montserrat font-semibold text-[12px] leading-[15px] text-slate-600'>Bhadohi, Uttar Pradesh</p>
                        </div>
                        <div>
                            <img src="user-1.png" alt="" className='w-20 h-auto' />
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="col-span-1 h-auto bg-card-review rounded-[20px] px-5 py-5 flex-col mb-[10px]">
                    <div className="bg-customPurple bg-opacity-60 rounded-2xl px-4 py-4 min-h-28 mb-4">
                        <p className='font-montserrat font-medium text-[13px] leading-5 text-yellow-400'>I earned ₹1 Lakh from this game. I quickly withdrew the winnings to my bank account. It is safe & easy to use app.</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-center items-start text-start py-1 px-3">
                            <div className="user-name flex flex-row mt-2 items-center">
                                <p className='font-montserrat font-semibold text-base leading-5 text-white'>
                                    Vishal Gupta
                                </p>
                                <img src="verify.png" alt="" className='w-auto h-[15px]' />
                            </div>
                            <p className='font-montserrat font-semibold text-[12px] leading-[15px] text-customGreen text-opacity-90'>Won ₹3,12,856</p>
                            <p className='font-montserrat font-semibold text-[12px] leading-[15px] text-slate-600'>Bhadohi, Uttar Pradesh</p>
                        </div>
                        <div>
                            <img src="user-1.png" alt="" className='w-20 h-auto' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 flex-row items-start justify-between flex-wrap mt-[60px] w-full">
                {/* Repeated Cards */}
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="col-span-1 h-auto bg-card-review rounded-[20px] px-5 py-5 flex-col mb-[10px]">
                        <div className="bg-customPurple bg-opacity-60 rounded-2xl px-4 py-4 min-h-28 mb-4">
                            <p className='font-montserrat font-medium text-[13px] leading-5 text-yellow-400'>I earned ₹1 Lakh from this game. I quickly withdrew the winnings to my bank account. It is safe & easy to use app.</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-center items-start text-start py-1 px-3">
                                <div className="user-name flex flex-row mt-2 items-center">
                                    <p className='font-montserrat font-semibold text-base leading-5 text-white'>
                                        Vishal Gupta
                                    </p>
                                    <img src="verify.png" alt="" className='w-auto h-[15px]' />
                                </div>
                                <p className='font-montserrat font-semibold text-[12px] leading-[15px] text-customGreen text-opacity-90'>Won ₹3,12,856</p>
                                <p className='font-montserrat font-semibold text-[12px] leading-[15px] text-slate-600'>Bhadohi, Uttar Pradesh</p>
                            </div>
                            <div>
                                <img src="user-1.png" alt="" className='w-20 h-auto' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;
