import React, { useState } from 'react'
import SearchIcon from "../assets/icons/search-icon.svg"

const SearchBar = () => {
	const [searchInput, setSearchInput] = useState("");
  const selectedText = useState("");

	const handleSearchInput = (event) => {
		setSearchInput(event.target.value);
	}

  return (
		<div className='col-span-1 flex flex-row bg-[var(--input-color)] rounded-[0.25rem] px-[0.5rem] py-[0.25rem] gap-[var(--custom-gap)]' >
			<img src={SearchIcon} />
			<input onChange={(event) => handleSearchInput(event)} className='focus:outline-none w-[100%] bg-transparent focus:border-none' placeholder='Find a text' value={searchInput}>
			</input>
		</div>
  )
}

export default SearchBar
