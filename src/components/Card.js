import React from 'react'
import paymentBg from '../assets/payment_bg.png';

const Card = () => {
    return (
        <>
            <div className="flex flex-row items-center  justify-center space-x-6 w-full mb-[150px] px-[8%] ">
                <img src="RNG_Certified.png" alt="" className='w-auto h-[95px]' />
                <img src="Made_in_india.png" alt="" className='w-auto h-[95px]' />
                <img src="No_Bots.png" alt="" className='w-auto h-[95px]' />
                <img src="Secure_Payment.png" alt="" className='w-auto h-[95px]' />
                <img src="Instant_Withdrawal.png" alt="" className='w-auto h-[95px]' />
                <img src="Customer_support.png" alt="" className='w-auto h-[95px]' />
            </div>
            <div className="flex flex-col w-full">
                <div className="font-montserrat font-thin text-2xl leading-8 text-center uppercase text-customGreen text-opacity-100">Instantly</div>
                <div className="font-montserrat font-bold text-[39px] leading-8 text-center " style={{
                    background: 'linear-gradient(85.98deg, #FFE974 10.89%, #D06CFF 91.16%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: '#fff0',
                    backgroundClip: 'text'
                }}>Withdraw Winnings</div>

                <div className="pay flex flex-row mt-14 w-full justify-between items-center mb-52 h-80 bg-cover " style={{ backgroundImage: `url(${paymentBg})`, backgroundSize: '100% 100%' }}>

                    <img src="G_pay.png" alt="" className='w-auto h-[50px]' />
                    <img src="Phone_pe.png" alt="" className='w-auto h-[50px]' />
                    <img src="Paytm.png" alt="" className='w-auto h-[50px]' />
                    <img src="BHIM.png" alt="" className='w-auto h-[50px]' />
                    <img src="amazon_pay.png" alt="" className='w-auto h-[50px]' />

                </div>


            </div>

        </>
    )
}

export default Card
