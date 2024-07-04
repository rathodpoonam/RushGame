import React from 'react'

const Rushmember = () => {
  return (
    <div>
      <div className="flex flex-col w-full mt-[150px]">
        <div className="font-montserrat font-thin text-lg md:text-2xl text-center uppercase text-customGreen text-opacity-100">
          RUSH'S
        </div>
        <div className="font-montserrat font-bold md:text-[32px] text-3xl leading-[39px]  text-center " style={{
          background: 'linear-gradient(85.98deg, #FFE974 10.89%, #D06CFF 91.16%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: '#fff0',
          backgroundClip: 'text'
        }}>
          Membership & Certification
        </div>

        <div className="flex flex-row justify-center items-centeren gap-6 mt-14 w-full">
          <div className="flex-1">
            <img src="rush-member-1.png" alt="" className='w-full h-auto' />
          </div>
          <div className="flex-1">
            <img src="rush-member-2.png" alt="" className='w-full h-auto' />
          </div>
          <div className="flex-1">
            <img src="rush-certificate.png" alt="" className='w-full h-auto' />
          </div>
        </div>

      </div>
      <footer className='flex flex-col gap-20 mt-24 pb-52'>
        <div className="flex w-full justify-center md:justify-between flex-col md:flex-row items-start">
          {/* //1 */}
          <div className="flex flex-1 flex-col items-center md:items-start justify-center md:justify-start gap-6">
            <div className="">
              <img src="rush-logo.png" alt="" className='w-[136px]' />
            </div>


            <div className="font-montserrat flex items-center justify-center md:text-sm font-normal leading-[140%] text-slate-600">Rush is an online gaming platform where the competitive spirit
              of India comes alive. Play AAA Rated games like Carrom, Ludo, Call Break & more against each other
              in skill-games and win real money.
            </div>
          </div>


          {/* //2 */}
          <div className=" w-full flex flex-1 mt-2 flex-col items-center justify-center md:items-end md:justify-end gap-5">
            <div className="flex flex-row items-center justify-center md:justify-end md:items-center gap-3 ">
              <img src="Instagram.png" alt="" className='w-[44px] h-auto' />
              <img src="Facebook.png" alt="" className='w-[44px] h-auto' />
              <img src="Telegram.png" alt="" className='w-[44px] h-auto' />
              <img src="Twitter.png" alt="" className='w-[44px] h-auto' />
              <img src="Youtube.png" alt="" className='w-[44px] h-auto' />
            </div>


          </div>
        </div>

        <footer className="relative z-10  pb-10   ">
          <div className="container">
            <div className=" flex flex-wrap">
              {/* <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            
            </div> */}

              <LinkGroup header="Resources" className="">
                <NavLink link="/#" label="SaaS Development" />
                <NavLink link="/#" label="Our Products" />
                <NavLink link="/#" label="User Flow" />
                <NavLink link="/#" label="User Strategy" />
              </LinkGroup>
              <LinkGroup header="Company">
                <NavLink link="/#" label="About TailGrids" />
                <NavLink link="/#" label="Contact & Support" />
                <NavLink link="/#" label="Success History" />
                <NavLink link="/#" label="Setting & Privacy" />
              </LinkGroup>
              <LinkGroup header="Quick Links">
                <NavLink link="/#" label="Premium Support" />
                <NavLink link="/#" label="Our Services" />
                <NavLink link="/#" label="Know Our Team" />
                <NavLink link="/#" label="Download App" />
              </LinkGroup>
              <LinkGroup header="Quick Links">
                <NavLink link="/#" label="Premium Support" />
                <NavLink link="/#" label="Our Services" />
                <NavLink link="/#" label="Know Our Team" />
                <NavLink link="/#" label="Download App" />
              </LinkGroup>


            </div>
          </div>
          <div>

          </div>
        </footer>

        {/* <div className="flex flex-col justify-center items-center gap-5">
          <img src="" alt="" />
          <div className="text-center w-[80%]">

            Rush by Hike is only for people above 18 years of age in states of India where permissible by extant law. The games involve an element of financial risk and may be habit forming. Please play responsibly at your own risk. T&Cs Apply.

          </div>
        </div> */}
      </footer>
    </div>

  )
}

export default Rushmember

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="text-slate-500 font-montserrat text-sm font-normal leading-5">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-white font-montserrat text-sm font-semibold leading-20"
      >
        {label}
      </a>
    </li>
  );
};
