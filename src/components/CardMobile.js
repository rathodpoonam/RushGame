import React from 'react'

const CardMobile = () => {
    return (
        <div>
            <div className="flex justify-center items-center border-2 border-white rounded-full bg-10green w-full h-14">
                <button className='flex flex-row w-full h-full justify-center  items-center text-center text-white font-semibold text-[15px]'>

                    <img src="downloadIcon.png" alt="" className='w-[18px] h-auto mr-2' />

                    Download & Get 50 Free Cash

                </button>
            </div>
            <div className="flex w-full h-6 bg-customPurple relative justify-center  items-center text-center mt-2 px-0 mb-2">
                <div className="absolute t-0 b-0 flex text-white font-bold font-montserrat text-[12px] italic ">Instantly Withdraw Winnings</div>
            </div>

            <div className="w-full flex flex-row items-center justify-center space-x-2 mb-4 ">
                <img src="G_pay.png" alt="" className='w-auto h-6' />
                <img src="Phone_pe.png" alt="" className='w-auto h-6' />
                <img src="Paytm.png" alt="" className='w-auto h-6' />
                <img src="BHIM.png" alt="" className='w-auto h-6' />
            </div>

            <div className="flex justify-center text-center mb-20">
                <img src="arrow.png" alt="" className='w-4 h-3'/>
            </div>
        </div>
    )
}

export default CardMobile

