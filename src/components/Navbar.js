import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [isFirstImage, setisFirstImage] = useState(true);

  const handleClick = () => {
    setisFirstImage(!isFirstImage);
  };
  const [items, setItems] = useState([
    { id: 1, name: 'Board Game', showDrop: false, dropdownContent: ['Carrom', 'Ludo'] },
    { id: 2, name: 'Casual Game', showDrop: false, dropdownContent: ['Call Break', 'Tezz'] },

  ]);
  const toggleDrop = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, showDrop: !item.showDrop } : item
      )
    );
  };
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  const toggleMenu = () => setMenuVisible(!menuVisible);
  const toggleLanguageDropdown = () => setLanguageDropdownVisible(!languageDropdownVisible);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setLanguageDropdownVisible(false);
  };

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isDesktop ? (
        <nav className='z-20 left-0 items-center w-full h-16 fixed mb-20 top-0 bg-transparent backdrop-blur-3xl'>
          <div className='flex items-center justify-between h-full px-[8%] pt-2.5'>
            <div className='w-32 h-12 pt-2.5'>
              <img alt='logo' src='rush-logo.png' />
            </div>
            <div className='relative'>


              <div className="absolute  top-16 left-0 md:relative md:top-0 md:left-auto md:flex uppercase ">
                <ul className='flex flex-col md:flex-row md:space-x-10 text-sm'>
                  <li className='relative flex items-center'>
                    <p
                      className="text-white  font-montserrat flex items-center cursor-pointer "
                      onClick={toggleDropdown}
                    >
                      All Games<FontAwesomeIcon icon={faCaretDown} className='ml-1' />
                    </p>
                    <div
                      className={`absolute top-full left-0 font-rubik font-normal text-sm w-[246px] mt-4 bg-dropPurple text-white shadow-lg transition-all duration-200 pr-7 pb-7 pl-7 rounded-2xl ease-in-out transform pt-3 ${dropdownVisible ? 'max-h-max opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                    >
                      <ul className='py-2 capitalize'>
                        {items.map(item => (
                          <li key={item.id} className=''>
                            <div className="flex flex-row items-center justify-between w-full font-medium font-rubik text-sm leading-normal py-4 hover:text-yellow-300">
                              <p>{item.name}</p>
                              <img
                                src={item.showDrop ? 'minus_icon.png' : 'plus_icon.png'}
                                alt=""
                                className={`w-[${item.showDrop ? '11px' : '11px'}] h-[${item.showDrop ? '0px' : '0px'}] cursor-pointer`}
                                onClick={() => toggleDrop(item.id)}
                                style={{ width: '11px', height: 'auto' }}
                              />
                            </div>
                            {item.showDrop && (
                              <div className="ml-2  rounded-lg">

                                {item.dropdownContent.map((content, index) => (
                                  <Link key={index} to={`/${content.toLowerCase()}`}>
                                    <p key={index} className='text-white hover:text-yellow-300 py-1 hover:border-b-0 border-transparent hover:border-yellow-300'>{content}</p>
                                  </Link>
                                ))}

                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <Link to="/earn">

                      <p className=' text-white text-opacity-70 font-montserrat'>Refer & Earn</p>
                    </Link>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <Link to='/faq'>

                      <p className=' font-montserrat text-white text-opacity-70'>FAQ's</p>
                    </Link>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <Link to="/tournament">

                      <p className=' font-montserrat text-white text-opacity-70'>LUDO TOURNAMENT</p>
                    </Link>
                    <div className='bg-red-500 mt-1 rounded-md font-rubik font-bold text-[9px] leading-3 flex items-center justify-center text-center text-white px-1 uppercase'>new</div>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <div className='relative'>
                      <div className='p-[1px] rounded-full bg-custom-radial'>
                        <div
                          className="flex justify-between rounded-full font-montserrat text-[12px] items-center text-center h-[32px] bg-custom-transparent-white text-slate-300 bg-customPurple px-3 gap-2 cursor-pointer"
                          onClick={toggleLanguageDropdown}
                        >
                          <img src="tds_language_icon.png" className='w-[22px]' alt="language icon" />
                          <p className='font-[12px]'>Language</p>
                          <img src="btn_up_arrow.png" alt="up-arrow" className={`w-2 transition-transform ${languageDropdownVisible ? 'transform rotate-180' : ''}`} />
                        </div>
                      </div>
                      <div className={`absolute left-[-40px] font-rubik font-normal text-sm w-[264px] bg-dropPurple text-white shadow-lg transition-all mt-4 duration-200 px-7 py-7 pb-7   rounded-2xl ease-in-out transform pt-3 ${languageDropdownVisible ? 'max-h-max opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                        <div className="text-white font-montserrat text-lg font-normal text-left w-full">
                          <p>Choose Language</p>
                        </div>
                        <ul className='py-2'>
                          <li className='cursor-pointer' onClick={() => handleLanguageSelect('english')}>
                            <div className={`flex flex-row items-center justify-between w-full ${selectedLanguage === 'english' ? 'text-10green' : 'text-white'} font-medium font-rubik text-sm leading-normal py-4`}>
                              <p>English - Aa</p>
                              <img src={selectedLanguage === 'english' ? 'selected_language_icon.png' : 'select_language_icon.png'} alt="" className='w-5 h-auto' />
                            </div>
                          </li>
                          <li className='cursor-pointer' onClick={() => handleLanguageSelect('hindi')}>
                            <div className={`flex flex-row items-center justify-between w-full ${selectedLanguage === 'hindi' ? 'text-10green' : 'text-white'} font-medium font-rubik text-sm leading-normal py-4`}>
                              <p>हिन्दी - आ</p>
                              <img src={selectedLanguage === 'hindi' ? 'selected_language_icon.png' : 'select_language_icon.png'} alt="" className='w-5 h-auto' />
                            </div>
                          </li>
                          <li className='cursor-pointer' onClick={() => handleLanguageSelect('gujarati')}>
                            <div className={`flex flex-row items-center justify-between w-full ${selectedLanguage === 'gujarati' ? 'text-10green' : 'text-white'} font-medium font-rubik text-sm leading-normal py-4`}>
                              <p>ગુજરાતી - એ</p>
                              <img src={selectedLanguage === 'gujarati' ? 'selected_language_icon.png' : 'select_language_icon.png'} alt="" className='w-5 h-auto' />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <div className="md:flex w-full h-16 top-0  left-0 px-[8%] z-20 items-center fixed bg-transparent backdrop-blur-3xl ">
          <div className='text-center pt-2.5 justify-between flex items-center w-full'>
            <div className='w-[90px] h-auto '>
              <img alt='logo' src='rush-logo.png' />
            </div>
            <div className="">
              <div className="flex flex-row justify-center items-center">
                <div className="star_rating flex flex-row items-center justify-center">
                  <img src="green_star.png" alt="" className='w-5 h-5 ' />
                  <p className='font-extrabold text-[16px] leading-5 flex items-center  text-right text-customGreen font-montserrat mx-1'>4.4</p>
                  <p className='font-thin text-[16px]  leading-5 flex items-center text-right text-slate-300 font-montserrat'>/ 5</p>
                </div>


                {/* <div className="flex justify-between rounded-full font-montserrat items-center text-center pl-1 bg-custom-transparent-white">
                  <img src="tds_language_icon.png" className='w-8 h-auto' alt="language icon" />
                </div> */}

                <div className='relative'>
                  <div className='p-[1px] rounded-full'>
                    <div
                      className="flex justify-between rounded-full font-montserrat text-[12px] items-center text-center pl-1 bg-custom-transparent-white  cursor-pointer"
                      onClick={toggleLanguageDropdown}
                    >
                      <img src="tds_language_icon.png" className='w-8 h-auto' alt="language icon" />

                    </div>
                  </div>
                  <div className={`absolute left-[-180px] font-rubik font-normal text-sm w-[264px] bg-dropPurple text-white shadow-lg transition-all mt-4 duration-200 px-7 py-7 pb-7   rounded-2xl ease-in-out transform pt-3 ${languageDropdownVisible ? 'max-h-max opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="text-white font-montserrat text-lg font-normal text-left w-full">
                      <p>Choose Language</p>
                    </div>
                    <ul className='py-2'>
                      <li className='cursor-pointer' onClick={() => handleLanguageSelect('english')}>
                        <div className={`flex flex-row items-center justify-between w-full ${selectedLanguage === 'english' ? 'text-10green' : 'text-white'} font-medium font-rubik text-sm leading-normal py-4`}>
                          <p>English - Aa</p>
                          <img src={selectedLanguage === 'english' ? 'selected_language_icon.png' : 'select_language_icon.png'} alt="" className='w-5 h-auto' />
                        </div>
                      </li>
                      <li className='cursor-pointer' onClick={() => handleLanguageSelect('hindi')}>
                        <div className={`flex flex-row items-center justify-between w-full ${selectedLanguage === 'hindi' ? 'text-10green' : 'text-white'} font-medium font-rubik text-sm leading-normal py-4`}>
                          <p>हिन्दी - आ</p>
                          <img src={selectedLanguage === 'hindi' ? 'selected_language_icon.png' : 'select_language_icon.png'} alt="" className='w-5 h-auto' />
                        </div>
                      </li>
                      <li className='cursor-pointer' onClick={() => handleLanguageSelect('gujarati')}>
                        <div className={`flex flex-row items-center justify-between w-full ${selectedLanguage === 'gujarati' ? 'text-10green' : 'text-white'} font-medium font-rubik text-sm leading-normal py-4`}>
                          <p>ગુજરાતી - એ</p>
                          <img src={selectedLanguage === 'gujarati' ? 'selected_language_icon.png' : 'select_language_icon.png'} alt="" className='w-5 h-auto' />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="flex items-center space-x-6 pl-1">
                  <img src={menuVisible ? '/cross.png' : '/HamburgerIcon.png'} alt='menu icon' className='w-8 h-auto cursor-pointer z-30' onClick={toggleMenu} />
                </div>
              </div>
              <div className={`fixed inset-0 transition-all ease-in-out md:relative md:top-0 md:left-auto md:flex space-x-6 ${menuVisible ? 'block' : 'hidden'}`}>
                {menuVisible && (
                  <div className="fixed inset-0 h-[100vh] bg-black bg-opacity-45 backdrop-blur-sm z-10" onClick={toggleMenu}></div>
                )}
                <div className="fixed right-0 top-0 bg-dropPurple h-screen w-[280px] rounded-l-2xl p-7 z-20">
                  <ul className='flex flex-col md:flex-row md:space-x-6 w-full h-full pt-14'>
                    <li className='relative mb-4 md:mb-0'>

                      <div className="flex items-center justify-between">
                        <p className="text-white text-lg uppercase font-montserrat flex items-center cursor-pointer">
                          All Games
                        </p>
                        <img
                          src={isFirstImage ? 'minus_icon.png' : 'plus_icon.png'}
                          alt=""
                          className="w-[11px] h-auto cursor-pointer"
                          onClick={handleClick}
                          style={{ width: '14px', height: 'auto' }}
                        />
                      </div>
                      {isFirstImage && (
                        <div className=" mt-2">
                          {items.map((item) => (
                            <div key={item.id} className="mb-2">
                              <div className="flex items-center justify-between">
                                <p className="text-white text-sm capitalize font-montserrat flex cursor-pointer">
                                  {item.name}
                                </p>
                                <img
                                  src={item.showDrop ? 'minus_icon.png' : 'plus_icon.png'}
                                  alt=""
                                  className="w-[11px] h-auto cursor-pointer"
                                  onClick={() => toggleDrop(item.id)}
                                  style={{ width: '11px', height: 'auto' }}
                                />
                              </div>
                              {item.showDrop && (
                                <div className=" mt-2 mb-1 text-sm capitalize">
                                  {item.dropdownContent.map((content, index) => (
                                    <Link to={content}>

                                      <p key={index} className="text-yellow-300 text-sm capitalize flex items-start  mb-2">
                                        {content}
                                      </p>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}














                    </li>
                    <li className='flex items-center space-x-2 mb-4 md:mb-0'>
                      <Link to="/earn">

                        <p className='text-lg text-white text-opacity-70 uppercase font-montserrat'>Refer & Earn</p>
                      </Link>
                    </li>
                    <li className='flex items-center space-x-2 mb-4 md:mb-0'>
                      <Link to="/faq">

                        <p className='text-lg font-montserrat text-white text-opacity-70'>FAQ's</p>
                      </Link>
                    </li>
                    <li className='flex items-center space-x-2 mb-4 md:mb-0'>
                      <Link tp="/tournament">

                        <p className='text-lg font-montserrat text-white text-opacity-70'>TOURNAMENT</p>
                      </Link>
                      <div className='bg-red-500 mt-1 rounded-md font-rubik font-bold text-[9px]  flex items-center justify-center text-center text-white  px-1 uppercase'>new</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div >
      )}

    </>
  );
};

export default Navbar;
