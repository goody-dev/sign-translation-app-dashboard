import React from 'react'
import { Link } from 'react-router-dom'

const ContributeMenu = () => {
  return (
    <div className='block z-50 mt-[calc(var(--custom-gap)/2)] md:p-[var(--card-padding)] md:bg-[var(--white-background)] md:rounded-[var(--custom-radius)] CTM  md:absolute'>
      <ul className='flex flex-col items-end md:gap-[calc(var(--custom-gap)/2)] md:items-center'>
        <li>
          <Link to='/record-video'>Record Video</Link>
        </li>
        <hr></hr>
        <li>
          <Link to='/translate-text'>Translate Text</Link>
        </li>
        <hr></hr>
        <li>
          <Link to='/validate-entry'>Validate Entry</Link>
        </li>
        <hr></hr>
        <li>
          <Link to='/contribute-video'>Contribute Video</Link>
        </li>
        <hr></hr>
        <li>
          <Link to='/contribute-text'>Contribute Text</Link>
        </li>
      </ul>
    </div>
  )
}

export default ContributeMenu
