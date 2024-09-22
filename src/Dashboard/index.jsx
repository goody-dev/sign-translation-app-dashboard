import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import AnalyticsIcon from '../assets/icons/analytics-icon.svg'
import LibraryIcon from '../assets/icons/library-icon.svg'

import '../App.css'

const Dashboard = () => {
    const url = useLocation();
    return (
        <div className="w-[100vw] flex flex-row bg-[var(--ash-background)] md:min-h-[calc(100dvh-97.19px)] h-[100%] p-[1.5rem] sm:p-[var(--custom-padding)] gap-[--custom-gap]">
          {(url.pathname === "/reports" || url.pathname === "/library" ||  url.pathname === "/") && <nav className='w-[10%] md:min-w-max'>
            <ul className='flex flex-col gap-[calc(var(--custom-gap)/2)]'>
              <li><Link className={'flex flex-row p-[0.4rem] items-center justify-around sm:p-[var(--button-padding)] rounded-[0.5rem] font-semibold shadow-[var(--button-shadow)]' + (url.pathname === "/reports" && " bg-[var(--light-blue-background)]" || url.pathname === "/" && " bg-[var(--light-blue-background)]")} to={"/reports"}><img src={AnalyticsIcon} className='w-[24px] h-[24px]'/><span className='invisible md:visible'>Reports</span></Link></li>
              <li><Link className={'flex flex-row p-[0.4rem] items-center justify-around sm:p-[var(--button-padding)] rounded-[0.5rem] font-semibold shadow-[var(--button-shadow)]' + (url.pathname === "/library" && " bg-[var(--light-blue-background)]")} to={"/library"}><img src={LibraryIcon} className='h-[24px]'/><span className='invisible md:visible'>Library</span></Link></li>
            </ul>
          </nav>}
          <Outlet/>
        </div>
    )
}

export default Dashboard