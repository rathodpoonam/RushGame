import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const ReviewCarousel = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [secondPlay, setSecondPlay] = useState(false);

    const handleImageClick = () => {
        setIsPlaying(true);
    };

    const handleSecondPlay = () => {
        setSecondPlay(true);
    };

    const reviews = [
        {
            id: 1,
            content: "I earned ₹1 Lakh from this game. I quickly withdrew the winnings to my bank account. It is safe & easy to use app.",
            userName: "Vishal Gupta",
            verified: true,
            winnings: "₹3,12,856",
            location: "Bhadohi, Uttar Pradesh",
            image: "user-1.png"
        },
        {
            id: 2,
            content: "I earned ₹1 Lakh from this game. I quickly withdrew the winnings to my bank account. It is safe & easy to use app.",
            userName: "Vishal Gupta",
            verified: true,
            winnings: "₹3,12,856",
            location: "Bhadohi, Uttar Pradesh",
            image: "user-1.png"
        },
        // Add more review objects as needed
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div>
            {/* SVG Definition */}
            <svg>
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="red" stopOpacity="1" />
                        <stop offset="100%" stopColor="blue" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="flex flex-col w-full">
                <div className="font-montserrat font-thin text-lg md:text-2xl text-center uppercase text-customGreen text-opacity-100">OUR PLAYERS</div>
                <div className="font-montserrat font-bold md:text-[32px] text-3xl leading-[39px] text-center" style={{
                    background: 'linear-gradient(85.98deg, #FFE974 10.89%, #D06CFF 91.16%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: '#fff0',
                    backgroundClip: 'text'
                }}>Trust Rush App</div>
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
                            <img src="main-rating-img.png" alt="Main Rating" />
                        </div>
                        <div className="flex flex-col justify-center items-center mt-10">
                            <div className="font-montserrat font-bold text-sm leading-[20px] flex items-center text-center text-yellow-400">So does Rush players 🤗</div>
                            <div className="grid grid-cols-2 gap-4 items-center justify-center w-full mt-10 mb-16">
                                <div className="col-span-full relative" onClick={handleImageClick} style={{ paddingTop: '56.25%' }}>
                                    {!isPlaying && (
                                        <img src="kiku_youtube.png" alt="Kiku Youtube" className="absolute top-0 left-0 w-full h-full rounded-[20px]" />
                                    )}
                                    {isPlaying && (
                                        <iframe
                                            src="https://www.youtube.com/embed/7lPai2mpXWQ?autoplay=1&rel=0"
                                            title="Kiku YouTube Video"
                                            scrolling='no'
                                            frameBorder={0}
                                            loading="lazy"
                                            allow="autoplay"
                                            className="absolute top-0 left-0 w-full h-full rounded-[20px] opacity-100 border-20 border-t-1 border-solid border-opacity-25 border-brand-gray box-border"
                                        ></iframe>
                                    )}
                                </div>
                                <div className="col-span-full relative" onClick={handleSecondPlay} style={{ paddingTop: '56.25%' }}>
                                    {!secondPlay && (
                                        <img src="satish_youtube.png" alt="Satish Youtube" className="absolute top-0 left-0 w-full h-full rounded-[20px]" />
                                    )}
                                    {secondPlay && (
                                        <iframe
                                            src="https://www.youtube.com/embed/2T2hotPQQ_8?autoplay=1&rel=0"
                                            title="Satish YouTube Video"
                                            loading="lazy"
                                            allow="autoplay"
                                            frameBorder={0}
                                            className="absolute top-0 left-0 w-full h-full rounded-[20px] opacity-100 border-20 border-t-1 border-solid border-opacity-25 border-brand-gray box-border"
                                        ></iframe>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="font-montserrat font-bold text-sm flex mb-2 justify-center items-center text-center text-yellow-400">Kiku & Satish love ❤️ Rush App</div>
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                {reviews.map((review) => (
                    <div key={review.id} className="card-width h-auto bg-card-review rounded-[20px] px-5 py-5 flex-col mb-[10px]">
                        <div className="bg-customPurple bg-opacity-60 rounded-2xl px-4 py-4 min-h-28 mb-4">
                            <p className='font-montserrat font-medium text-[13px] leading-5 text-yellow-400'>{review.content}</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-center items-start text-start py-1 px-3">
                                <div className="user-name flex flex-row mt-2 items-center">
                                    <p className='font-montserrat font-semibold text-base leading-5 text-white'>
                                        {review.userName} {review.verified && <img src="verify.png" alt="Verified" className='w-auto h-[15px]' />}
                                    </p>
                                </div>
                                <p className='font-montserrat font-semibold text-[12px] leading-[15px] text-customGreen text-opacity-90'>Won {review.winnings}</p>
                                <p className='font-montserrat font-semibold text-[12px] leading-[15px] text-slate-600'>{review.location}</p>
                            </div>
                            <div className="">
                                <img src={review.image} alt={review.userName} className='w-20 h-auto' />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ReviewCarousel;
