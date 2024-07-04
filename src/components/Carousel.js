import React, { useState } from 'react';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>

            <div className="relative w-full mx-auto overflow-hidden mt-20">
                <div className="flex text-center w-full flex-col mb-3">
                    <div className="">

                        <h1 className='italic font-montserrat font-bold leading-5 text-base' style={{
                            background: 'linear-gradient(85.98deg, #FFE974 10.89%, #D06CFF 91.16%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: '#fff0',
                            backgroundClip: 'text'
                        }}>India’s Trusted Real Cash Gaming App</h1>
                    </div>
                    <div className="flex flex-row justify-center space-x-4 items-center w-full mt-2">
                        <img src="5_crore_players_mobile.png" alt="" className='w-14 h-10' />
                        <img src="RNG_Certified_mobile.png" alt="" className='w-14 h-10' />
                        <img src="Instant_withdrawals_mobile.png" alt="" className='w-14 h-10' />
                        <img src="customer_support_mobile.png" alt="" className='w-14 h-10' />
                    </div>
                </div>
                <div className="relative w-full h-auto  flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {items.map((item, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <img src={item} alt={`Slide ${index}`} className="w-full h-full object-cover " />
                        </div>
                    ))}
                </div>

                {/* <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        &#10094;
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        &#10095;
      </button> */}
                <div className="flex  flex-col items-center mb-6 mt-3 ">
                    <p className='text-10green text-2xl font-montserrat  font-bold '>₹10 Crore+</p>
                    <p className='text text-lg' style={{
                        background: 'linear-gradient(85.98deg, #FFE974 10.89%, #D06CFF 91.16%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: '#fff0',
                        backgroundClip: 'text'
                    }}>Daily Cash Winnings</p>

                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-4 h-1 rounded-sm ${index === currentIndex ? 'bg-white' : 'bg-dropPurple'}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Carousel;
