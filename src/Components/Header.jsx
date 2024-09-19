import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/icons/LOGO.png'
import ArrowDown from '../assets/icons/arrow-down.png'
import NaijaLogo from '../assets/icons/nigeria-icon.svg'
import ContributeMenu from './ContributeMenu.jsx'
import { useAuth } from '../provider/authProvider.jsx'
import MobileMenu from './MobileMenu.jsx'
import SubMenu from './SubMenu.jsx'


const Header = () => {
  const translateMenu = [
    {
      text: "Video",
      link: "/user/translate-video"
    },
    {
      text: "Text",
      link: "/user/translate-text"
    }
  ];

  const contributeMenu = [
    {
      text: "Video",
      link: "/user/contribute-video"
    },
    {
      text: "Text",
      link: "/user/contribute-text"
    },
    // {
    //   text: "Video and Text",
    //   link: "/contribute-video-text"
    // }
  ]

  const { token, handleToken } = useAuth();
  const [showContrMenu, setShowContrMenu] = useState(false);
  const [showTranslateMenu, setShowTranslateMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const handleContrClick = () => {
    setShowContrMenu(!showContrMenu);
    setShowTranslateMenu(false);
  }

  const handleTranslateClick = () => {
    setShowTranslateMenu(!showTranslateMenu);
    setShowContrMenu(false);
  }

  const handleMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  }

  const url = useLocation();
  const currentPath = url.pathname;

  useEffect(()=>{
    setShowContrMenu(false);
    setShowTranslateMenu(false);
    setShowMobileMenu(false);
  }, [currentPath])

  const logout = () => {
    handleToken();
  }



  return (
    <header className='flex flex-row max-w-[100vw] justify-between p-[1.5rem] items-center bg-[var(--white-background)] sm:p-[var(--custom-padding)] sm:py-[1.5rem] sm:gap-[var(--custom-gap)]'>
      <Link to="/" className='block' aria-label='Go to Home Page'>
        <img className="w-[10vw] min-w-[4rem] max-w-[6rem]" src={Logo} alt="Logo" />
      </Link>
      <div className='flex items-center gap-[var(--custom-gap)] sm:flex-row sm:gap-[1.5rem]'>
        <nav className={'hidden md:block'}>
          <ul className='flex flex-col text-[1.25rem] sm:flex-row sm:gap-[1.5rem] sm:items-center'>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className='flex flex-col items-end md:block'>
              <button onClick={handleContrClick} className='flex flex-row items-center gap-[calc(var(--inline-gap)/2)] md:leading-[1rem]'>Contribute<img src={ArrowDown} className={'w-[var(--vh-icon)] ' + (showContrMenu && 'rotate-[180deg]')} alt='arrow down icon'/></button>
              {showContrMenu && <SubMenu menu={contributeMenu} />}
            </li>
            {token && token !== "initial"?
              <>
            <li className='flex flex-col items-end md:block'>
              <button onClick={handleTranslateClick} className='flex flex-row items-center gap-[calc(var(--inline-gap)/2)] md:leading-[1rem]'>Translate<img src={ArrowDown} className={'w-[var(--vh-icon)] ' + (showTranslateMenu && 'rotate-[180deg]')} alt='arrow down icon'/></button>
              {showTranslateMenu && <SubMenu menu={translateMenu} />}
            </li>
            <li>
              <Link to="/user/validate-entry">Validate</Link>
            </li>
            </>: null
            }
            {currentPath === "/" || currentPath === "/signin" || currentPath === "/signup"?
              <>
                <li>
                  {token && token !== "initial"?<button onClick={logout}>Logout</button>:<Link to="/signin">Login</Link>}
                </li>
                <li>
                  <Link to="/signup"><button className='bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)]'>Register</button></Link>
                </li>
              </>: null
            }
          </ul>
        </nav>
        <button aria-label='Select language' className='hidden flex-row items-center gap-[calc(var(--inline-gap)/2)] sm:flex sm:justify-self-end'>
          <img src={NaijaLogo} alt="language-icon" />
          <img src={ArrowDown} className='w-[var(--vh-icon)]' alt='arrow down icon'/>
        </button>
        <Link className='hidden sm:block md:hidden' to="/signup"><button className='bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)]'>Register</button></Link>
        <div>
        <button onClick={handleMenuClick} className='md:hidden'>Menu</button>
        {showMobileMenu && <MobileMenu/>}
        </div>
      </div>
    </header>
  )
}

export default Header;