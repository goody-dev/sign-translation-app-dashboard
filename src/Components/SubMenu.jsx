import React from 'react'
import { Link } from 'react-router-dom'

const SubMenu = ({menu}) => {
  return (
    <div className='block z-50 mt-[calc(var(--custom-gap)/2)] md:p-[var(--card-padding)] md:bg-[var(--white-background)] md:rounded-[var(--custom-radius)] CTM  md:absolute'>
      <ul className='flex flex-col items-end md:gap-[calc(var(--custom-gap)/2)] md:items-center'>
        {menu?.map((item, id) =>
          <li key={id}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default SubMenu
