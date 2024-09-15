import React from 'react'
import TransIcon from '../assets/icons/trans-vector.svg'
import Thumbnail from '../assets/illustrations/video-illustration.png'
import AreaChartCard from '../Components/AreaChartCard'
import BarChartCard from '../Components/BarChartCard'


const Report = () => {
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
    {month: "OCt", users: 29},
    {month: "NOV", users: 148},
    {month: "DEC", users: 90}

  ]
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

  return (
    <div className="flex flex-col gap-[var(--custom-gap)] h-[100%] w-[85%]">
      <div id="filter">
        <select className='p-[var(--button-padding)] rounded-[1.25rem] w-[20rem] text-[1rem] text-[var(--subtext-color)] font-normal border-[#EFF0F6] border-[1px] border-solid shadow-[var(--tile-shadow)] '>
          <option className=''>Timeframe: <span className='font-semibold text-black'>All-time</span></option>
        </select>
      </div>
      <div className="flex flex-row flex-wrap w-[100%] gap-[1.5rem] shadow-[var(--tile-shadow)]">
        <div id="figures" className="flex flex-col w-[calc(50%-1rem)] h-[auto] max-h-[537px] gap-[1rem]">
            <div className="flex flex-row gap-[1rem] h-max">
              <div className="flex flex-col bg-[var(--white-background)] w-[calc((1/3)*100%)] h-[100%] max-h-[152px] p-[var(--tile-padding)] rounded-[1rem] shadow-[var(--tile-shadow)] gap-[var(--custom-gap)] border-[#EFF0F6] border-[1px] border-solid">
                  <p className='text-[0.875rem] text-[var(--subtext-color)] font-[500]'>Active Users</p>
                  <p className='font-bold text-[1.5rem]'>47<span className='text-[1rem] text-[var(--xsubtext-color)]'>/95</span></p>
              </div>
              <div className="flex flex-col justify-between w-[70%] max-h-[152px]">
                <div className="flex flex-col justify-between bg-[var(--white-background)] w-[100%] h-[50%] shadow-[var(--tile-shadow)]  p-[var(--tile-padding)] rounded-[1rem] border-[#EFF0F6] border-[1px] border-solid">
                    <p className='text-[14px] text-[var(--subtext-color)] font-[500]'>Total Video Contributions</p>
                    <p className='font-bold text-[1.5rem]/7'>3,298</p>
                </div>
                <div className="flex flex-col justify-between bg-[var(--white-background)] w-[100%] h-[50%] shadow-[var(--tile-shadow)]  p-[var(--tile-padding)] rounded-[1rem] border-[#EFF0F6] border-[1px] border-solid">
                    <p className='text-[14px] text-[var(--subtext-color)] font-[500]'>Total Text Contributions</p>
                    <p className='font-bold text-[1.5rem]'>3,298</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[1rem] w-[100%] h-max">
                <AreaChartCard title="Top Text Rating" figure="64%" data={ttrData} />
                <AreaChartCard title="Top Video Rating" figure="86%" data={ttrData} />
                <AreaChartCard title="Contributions" figure="+34%" data={ttrData} />
            </div>
        </div>
        <BarChartCard title={"Activity"} data={activityData}/>
        <div id="twvt" className="flex flex-col w-[calc(50%-1rem)] h-auto bg-[var(--white-background)] shadow-[var(--tile-shadow)] p-[var(--tile-padding)] rounded-[1rem] gap-[var(--tile-padding)] border-[#EFF0F6] border-[1px] border-solid">
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
        <div id="twtt" className="flex flex-col w-[calc(50%-1rem)] h-auto bg-[var(--white-background)] shadow-[var(--tile-shadow)] p-[var(--tile-padding)] rounded-[1rem] gap-[var(--tile-padding)] border-[#EFF0F6] border-[1px] border-solid" >
          <div className="flex flex-row w-[100%] justify-between">
            <p  className='text-[14px] text-[var(--subtext-color)] font-[500]'>Top Weekly Text Translation</p>
            <p>83%</p>
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
