import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const IntallCarousel = ({ intas }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const newIndex = currentIndex === 0 ? intas.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = currentIndex === intas.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return (
        <>

            <div className="font-montserrat font-thin text-lg md:text-2xl text-center uppercase text-customGreen text-opacity-100">how to</div>
            <div className="font-montserrat font-bold text-3xl md:text-[32px] leading-[39px]  text-center " style={{
                background: 'linear-gradient(85.98deg, #FFE974 10.89%, #D06CFF 91.16%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: '#fff0',
                backgroundClip: 'text'
            }}>Install Rush App</div>

            <div className="md:px-[50px] py-0">
                <p className='font-montserrat font-thin text-base md:text-xl leading-6 text-center text-slate-600 mt-5'>
                    Steps to install the Rush real money game app win money online
                </p>
            </div>
            <div className='px-6 py-4 bg-dropPurple rounded-2xl'>

                <div className="relative w-full mx-auto overflow-hidden mt-4 md:mt-20">

                    <div className="relative w-full h-auto  flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {intas.map((inta, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                <img src={inta} alt={`Slide ${index}`} className="w-full h-full object-cover " />
                            </div>
                        ))}
                    </div>


                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full justify-center flex space-x-2 ">
                        {intas.map((_, index) => (
                            <div className="flex flex-row justify-between items-start">
                                <button onClick={prevSlide} className="absolute pl-4 top-1/2 left-0 transform -translate-y-1/2  text-white p-2 rounded-full">
                                    &#10094;
                                </button>
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 md:w-4 md:h-4 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-dropPurple'}`}
                                />
                                <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2  text-white p-2 rounded-full">
                                    &#10095;
                                </button>
                            </div>
                        ))}

                    </div>

                    {/* <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                    &#10095;
                </button> */}
                </div>
            </div>



            <div className="grid grid-cols-1 w-full mt-[150px]">
                <div className="font-montserrat font-thin text-2xl text-center uppercase text-customGreen text-opacity-100">EXPERIENCE 15+</div>
                <div className="font-montserrat font-bold text-[32px] leading-[39px]  text-center " style={{
                    background: 'linear-gradient(85.98deg, #FFE974 10.89%, #D06CFF 91.16%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: '#fff0',
                    backgroundClip: 'text'
                }}>Skill Based Games</div>

                <div className="px-[50px] py-0">
                    <p className='font-montserrat font-thin text-xl leading-6 text-center text-slate-600 mt-5'>
                        Steps to install the Rush real money game app win money online
                    </p>
                </div>
                <div className="w-full grid md:grid-cols-5 mt-4 sm:grid-cols-3 grid-cols-2 items-center justify-center gap-3">
                    <div className="items-center justify-center text-center ">
    
                            <Link to="/Ludo">
                                <img src="Speed Leedo.png" alt="" className='' />
                            </Link>
                    
                    </div>
                    <div className="items-center justify-center text-center ">
    
                            <Link to="/Ludo">
                                <img src="Speed Ladders.png" alt="" className='' />
                            </Link>
                    
                    </div>
                    <div className="items-center justify-center text-center ">
    
                            <Link to="/Ludo">
                                <img src="Speed Leedo.png" alt="" className='' />
                            </Link>
                    
                    </div>
                    <div className="items-center justify-center text-center ">
    
                            <Link to="/Ludo">
                                <img src="Speed Ladders.png" alt="" className='' />
                            </Link>
                    
                    </div>
                    <div className="items-center justify-center text-center ">
    
                            <Link to="/Ludo">
                                <img src="Speed Leedo.png" alt="" className='' />
                            </Link>
                    
                    </div>
                    <div className="items-center justify-center text-center ">
    
                            <Link to="/Ludo">
                                <img src="Speed Ladders.png" alt="" className='' />
                            </Link>
                    
                    </div>
                    <div className="items-center justify-center text-center ">
    
                            <Link to="/Ludo">
                                <img src="Speed Leedo.png" alt="" className='' />
                            </Link>
                    
                    </div>
                    <div className="items-center justify-center text-center ">
    
                            <Link to="/Ludo">
                                <img src="Speed Ladders.png" alt="" className='' />
                            </Link>
                    
                    </div>
                    <div className="items-center justify-center text-center ">
    
                            <Link to="/Ludo">
                                <img src="Speed Ladders.png" alt="" className='' />
                            </Link>
                    
                    </div>
                    <div className="items-center justify-center text-center ">
    
                            <Link to="/Ludo">
                                <img src="Speed Ladders.png" alt="" className='' />
                            </Link>
                    
                    </div>
      

                </div>


            </div>

        </>
    )
}

export default IntallCarousel
