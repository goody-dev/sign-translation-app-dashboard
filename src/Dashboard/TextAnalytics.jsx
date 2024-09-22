import React, { useState } from 'react'
import ArrowIcon from '../assets/icons/filled-arrow-right.png'

import SearchBar from '../Components/SearchBar'
import Gallery from '../Components/Gallery'
import { useParams } from 'react-router-dom'
import { useAuth } from '../provider/authProvider'
import { useEffect } from 'react'
import axios from 'axios'

const TextAnalytics = () =>  {
  const { token } = useAuth();
  let config = {
    headers: {
      'authorization': `Bearer ${token}`
    }
  }

  const params = useParams();

  const [selectedTextTranslation, setSelectedTextTranslation] = useState("");
  const [selectedText, setSelectedText] = useState(selectedTextTranslation.text);
  const [selectedTextId, setSelectedTextId] = useState(params.id);


  const fetchTextTranslation = async()=> {
    await axios.get(`https://signs-5n09.onrender.com/text/${selectedTextId}`, config)
    .then(res => {
      console.log(res.data.data[0]);
      setSelectedTextTranslation(res.data.data[0]);
    }).catch(err => console.log(err));
  }

  const [searchData, setSearchData] = useState([]);

	const fetchData = async()=> {
    await axios.get('https://signs-5n09.onrender.com/text/all', config)
    .then(res => {
      console.log(res.data.data);
      setSearchData(res.data.data);
    }).catch(err => console.log(err));
  }

  useEffect(()=>{
    fetchTextTranslation();
    fetchData();
  }, [])

  return (
    <div className='flex flex-col w-[100%] gap-[var(--custom-gap)] md:max-w-[calc(100%-2rem)] md:h-[calc(100vh-97.19px)]'>
      <div className='flex flex-col items-start w-[100%] md:grid md:grid-cols-2 gap-[var(--custom-gap)]'>
        <h1 className='md:col-span-1 font-bold text-[2rem] text-left'>Text Analytics</h1>
        <SearchBar searchData={searchData[0]? searchData: null} />
      </div>
      <div className='flex flex-col w-[100%] md:grid md:grid-cols-2 gap-[var(--custom-gap)] items-center'>
        <div className='md:col-span-1 flex flex-col items-center justify-center p-[var(--button-padding)] md:bg-[var(--white-background)] md:h-[50vh] w-[100%]'>
          <p className='text-center text-[20px] font-semibold text-wrap'>{selectedTextTranslation.text? selectedTextTranslation.text: "Loading..."}</p>
        </div>
        <Gallery selectedTextId={selectedTextId} translations={selectedTextTranslation.videoUrls && selectedTextTranslation.videoUrls}/>
      </div>
    </div>
  )
}

export default TextAnalytics
