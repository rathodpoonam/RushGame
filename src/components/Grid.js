import React from 'react'
import { Link } from 'react-router-dom'

const Grid = () => {
    return (
        <div>

            <div className="grid grid-cols-4 md:grid-rows-none gap-3  px-0 justify-center text-center items-center">

                <div className=" col-span-full  md:col-span-3">
                    <div className="pr-12 pl-8 py-8 flex flex-col justify-center border-2 rounded-[48px] mt-4 border-slate-600" style={{ background: 'linear-gradient(180deg, rgba(41, 1, 64, 0.2) 0%, rgba(41, 1, 64, 0.1) 100%)' }}>
                        <p className='font-montserrat font-semibold md:text-3xl leading-[37px] text-10green'>1 Referral = ₹1,000</p>
                        <p className='font-montserrat font-thin md:text-lg leading-8 text-slate-500'>Refer friends to earn</p>
                        {/* <div className=""> */}
                        <img src="reason-img-1.png" alt="" className='h-72 rounded-3xl' />
                        {/* </div> */}
                    </div>
                </div>
                <div className=" md:col-span-1 col-span-2 ">
                    <div className="pr-6 pl-4 py-4 flex flex-col justify-center items-center border-2 rounded-[48px] mt-4 border-slate-600" style={{ background: 'linear-gradient(180deg, rgba(41, 1, 64, 0.2) 0%, rgba(41, 1, 64, 0.1) 100%)' }}>
                        <p className='font-montserrat font-semibold md:text-3xl leading-[37px] text-10green'>1 Referral = ₹1,000</p>
                        <p className='font-montserrat font-thin md:text-lg leading-8 text-slate-500'>Refer friends to earn</p>
                        {/* <div className=""> */}
                        <img src="reason-img-3.png" alt="" className='h-72 rounded-3xl' />
                        {/* </div> */}
                    </div>
                </div>
                <div className=" md:col-span-1 col-span-2 ">
                    <div className="pr-6 pl-4 py-4 flex flex-col justify-center items-center border-2 rounded-[48px] mt-4 border-slate-600" style={{ background: 'linear-gradient(180deg, rgba(41, 1, 64, 0.2) 0%, rgba(41, 1, 64, 0.1) 100%)' }}>
                        <p className='font-montserrat font-semibold md:text-3xl leading-[37px] text-10green'>1 Referral = ₹1,000</p>
                        <p className='font-montserrat font-thin md:text-lg leading-8 text-slate-500'>Refer friends to earn</p>
                        {/* <div className=""> */}
                        <img src="reason-img-3.png" alt="" className='h-72 rounded-3xl' />
                        {/* </div> */}
                    </div>
                </div>


              
                <div className=" col-span-full  md:col-span-3">
                    <div className="pr-12 pl-8 py-8 flex flex-col justify-center border-2 rounded-[48px] mt-4 border-slate-600" style={{ background: 'linear-gradient(180deg, rgba(41, 1, 64, 0.2) 0%, rgba(41, 1, 64, 0.1) 100%)' }}>
                        <p className='font-montserrat font-semibold md:text-3xl leading-[37px] text-10green'>1 Referral = ₹1,000</p>
                        <p className='font-montserrat font-thin md:text-lg leading-8 text-slate-500'>Refer friends to earn</p>
                        {/* <div className=""> */}
                        <img src="reason-img-1.png" alt="" className='h-72 rounded-3xl' />
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid
