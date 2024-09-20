import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const SearchList = ({items, searchInput}) => {
  const [list, setList] = useState([]);

  // const filterBySearch = () => {
  //   const newList = list.filter(item => searchInput in item.videoUrl || searchInput in item.text);
  //   setList(newList);
  //   console.log(newList);
  // }

  useEffect(()=>{
    setList(items);
  }, [])

  // useEffect(()=>{
  //   items && items[0]? filterBySearch(): null;
  // }, [searchInput])

  return (
    <div className='z-50 absolute top-[48px] bg-[var(--white-background)] flex flex-col h-fit max-h-[20rem] w-[100%] overflow-y-auto overflow-x-hidden shadow-sm'>
      {list && list[0]? list.map((item, idx) => 
      <>
        <a key={idx} href={item.text? `/text-analytics/${item.id}`: item.videoUrl !== null? `/video-analytics/${item.id}`: null} className='w-[100%] p-[10px] text-clip'>
          <p className='text-left'>{item.text || item.videoUrl}</p>
        </a>
        <hr></hr>
      </>
      ): "Loading"}
    </div>
  )
}

export default SearchList
