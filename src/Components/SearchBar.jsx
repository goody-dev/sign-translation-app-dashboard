import React, { useState } from 'react'
import SearchIcon from "../assets/icons/search-icon.svg"

const SearchBar = () => {
	const [searchInput, setSearchInput] = useState("");
  const selectedText = useState("");

	const fetchData = async()=> {
    await axios.get('https://signs-5n09.onrender.com/text/all', config)
    .then(res => {
      console.log(res.data.data);
      setSignVideos(res.data.data);
    }).catch(err => console.log(err));
  }

	const handleSearchInput = (event) => {
		setSearchInput(event.target.value);
	}

  return (
		<div className='col-span-1 h-[36px] flex flex-row items-center bg-[var(--searchbar-background)] rounded-[0.375rem] px-[0.5rem] py-[0.25rem] gap-[var(--custom-gap)]' >
			<img src={SearchIcon} className="h-[12px] w-[12px]" />
			<input onChange={(event) => handleSearchInput(event)} className='focus:outline-none w-[100%] bg-transparent focus:border-none' placeholder='Find a text' value={searchInput}>
			</input>
		</div>
  )
}

export default SearchBar
