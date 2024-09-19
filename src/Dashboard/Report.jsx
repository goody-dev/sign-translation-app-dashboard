import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import TransIcon from '../assets/icons/trans-vector.svg'
import Thumbnail from '../assets/illustrations/video-illustration.png'
import AreaChartCard from '../Components/AreaChartCard'
import BarChartCard from '../Components/BarChartCard'
import { useAuth } from '../provider/authProvider'


const Report = () => {
  const { token } = useAuth();
  let config = {
    headers: {
      'authorization': `Bearer ${token}`
    }
  }

  const [timeframe, setTimeframe] = useState("");

  const handleFrameChange = (event) => {
    setTimeframe(event.target.value);
    // alert(event.target.value);
  }

  const [signVideos, setSignVideos] = useState([]);
  const fetchVideos = async()=> {

    await axios.get('https://signs-5n09.onrender.com/video/all', config)
    .then(res => {
      console.log(res.data.data);
      setSignVideos(res.data.data);
    }).catch(err => console.log(err));
  }

  const [signTexts, setSignTexts] = useState([]);
  const fetchTexts = async()=> {
    await axios.get('https://signs-5n09.onrender.com/text/all', config)
    .then(res => {
      console.log(res.data.data);
      setSignTexts(res.data.data);
    }).catch(err => console.log(err));
  }

  useEffect(()=> {
    fetchTexts();
    fetchVideos();
  }, [token])

  const activityData = [
    {month: "JAN", users: 58},
    {month: "FEB", users: 69},
    {month: "MAR", users: 72},
    {month: "APR", users: 84},
    {month: "MAY", users: 96},
    {month: "JUN", users: 30},
    {month: "JUl", users: 168},
    {month: "AUG", users: 79},
    {month: "SEP", users: 80},
    {month: "OCT", users: 29},
    {month: "NOV", users: 148},
    {month: "DEC", users: 90}

  ]

  const topTextRating = signTexts[0]? signTexts.reduce((text, next) => text.rating < next.rating? next.rating: text.rating) : <span className='text-[1rem] text-[var(--xsubtext-color)]'>...</span> || "Null";
  const topVideoRating = signVideos[0]? signVideos.reduce((video, next) => video.rating < next.rating? next.rating: video.rating): <span className='text-[1rem] text-[var(--xsubtext-color)]'>...</span> || "Null";
  const fetchActivityData = () => {

  }

  const ttrData = [
    {
      day: "",
      rating: "15",
    },
    {
      day: "",
      rating: "10",
    },
    {
      day: "",
      rating: "30",
    },
    {
      day: "",
      rating: "24",
    },
    {
      day: "",
      rating: "34",
    },
    {
      day: "",
      rating: "20",
    },
    {
      day: "",
      rating: "30",
    },
    {
      day: "",
      rating: "64",
    },
    {
      day: "",
      rating: "84",
    },
    {
      day: "",
      rating: "64",
    },
  ]

  const fetchTopTextRating = () => {

  }

  const fetchTopVideoRating = () => {

  }

  const fetchPercentContributions = () => {
    
  }

  return (
    <div className="flex flex-col gap-[var(--custom-gap)] h-[100%] w-[85%]">
      <div id="filter">
        <select name="timeframe" onChange={handleFrameChange} value={timeframe} id="timeframe-select" aria-placeholder='Timeframe' className='p-[var(--button-padding)] rounded-[1.25rem] w-[20rem] text-[1rem] text-[var(--subtext-color)] font-normal border-[#EFF0F6] border-[1px] border-solid shadow-md '> 
          <option className='' value="all-time"><span className='font-semibold text-black'>All-time</span></option>
          <option className='' value="weekly"><span className='font-semibold text-black'>Last One Week</span></option>
          <option className='' value="monthly"><span className='font-semibold text-black'>Last One Month</span></option>
          <option className='' value="yearly"><span className='font-semibold text-black'>Last One Year</span></option>
        </select>
      </div>
      <div className="flex flex-row flex-wrap w-[100%] gap-[1.5rem]">
        <div id="figures" className="flex flex-col w-[calc(50%-1rem)] h-[auto] max-h-[537px] gap-[1rem]">
            <div className="flex flex-row gap-[1rem] h-max">
              <div className="flex flex-col bg-[var(--white-background)] w-[calc((1/3)*100%)] h-[100%] max-h-[152px] p-[var(--tile-padding)] rounded-[1rem] shadow-md gap-[var(--custom-gap)] border-[#EFF0F6] border-[1px] border-solid">
                  <p className='text-[0.875rem] text-[var(--subtext-color)] font-[500]'>Active Users</p>
                  <p className='font-bold text-[1.5rem]'>47<span className='text-[1rem] text-[var(--xsubtext-color)]'>/95</span></p>
              </div>
              <div className="flex flex-col justify-between gap-[1rem] w-[70%] max-h-[152px]">
                <div className="flex flex-col justify-between bg-[var(--white-background)] w-[100%] shadow-md  p-[var(--tile-padding)] rounded-[1rem] border-[#EFF0F6] border-[1px] border-solid">
                    <p className='text-[14px]/4 text-[var(--subtext-color)] font-[500]'>Total Video Contributions</p>
                    <p className='font-bold text-[1.5rem]/7'>{signVideos[0]? signVideos.length: <span className='text-[1rem] text-[var(--xsubtext-color)]'>...</span>}</p>
                </div>
                <div className="flex flex-col justify-between bg-[var(--white-background)] w-[100%] shadow-md  p-[var(--tile-padding)] rounded-[1rem] border-[#EFF0F6] border-[1px] border-solid">
                    <p className='text-[14px]/4 text-[var(--subtext-color)] font-[500]'>Total Text Contributions</p>
                    <p className='font-bold text-[1.5rem]/7'>{signTexts[0]? signTexts.length: <span className='text-[1rem] text-[var(--xsubtext-color)]'>...</span>}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[1rem] w-[100%] h-max">
                <AreaChartCard title="Top Text Rating" figure={topTextRating} data={ttrData} />
                <AreaChartCard title="Top Video Rating" figure={topVideoRating} data={ttrData} />
                <AreaChartCard title="Contributions" figure="+34%" data={ttrData} />
            </div>
        </div>
        <BarChartCard title={"Activity"} data={activityData}/>
        <div id="twvt" className="flex flex-col w-[calc(50%-1rem)] h-auto max-h-[280px] bg-[var(--white-background)] shadow-md p-[var(--tile-padding)] rounded-[1rem] gap-[var(--tile-padding)] border-[#EFF0F6] border-[1px] border-solid">
          <div className="flex flex-row w-[100%] justify-between">
            <p  className='text-[14px] text-[var(--subtext-color)] font-[500]'>Top Weekly Video Translation</p>
            <p>83%</p>
          </div>
          <div className="flex flex-row w-[100%] justify-between items-center">
            <img src={Thumbnail} className='w-[40%]'></img>
            <img src={TransIcon} />
            <div className='flex flex-row items-center w-[40%] h-[100%] bg-[var(--ash-background)] text-center'>
              <p className='text-wrap'>During birth, the mother goes through pain</p>
            </div> 
          </div>
        </div>
        <div id="twtt" className="flex flex-col w-[calc(50%-1rem)] h-auto max-h-[280px] bg-[var(--white-background)] shadow-md p-[var(--tile-padding)] rounded-[1rem] gap-[var(--tile-padding)] border-[#EFF0F6] border-[1px] border-solid" >
          <div className="flex flex-row w-[100%] justify-between">
            <p  className='text-[14px] text-[var(--subtext-color)] font-[500]'>Top Weekly Text Translation</p>
            <p>72%</p>
          </div>
          <div className="flex flex-row w-[100%] justify-between items-center">
            <div className='flex flex-row items-center w-[40%] h-[100%] bg-[var(--ash-background)] text-center'>
              <p>During birth, the mother goes through pain</p>
            </div>
            <img src={TransIcon} />
            <img src={Thumbnail} className='w-[40%]'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report
