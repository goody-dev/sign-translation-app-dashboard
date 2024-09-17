import React from 'react'
import Thumbnail from "../assets/illustrations/video-illustration.png"

const Gallery = ({selectedTextId}) => {
	const fetchTexts = async()=> {
    await axios.get(`https://signs-5n09.onrender.com/text/${selectedTextId}`)
    .then(res => {
      //console.log(res.data);
      setSignTexts(res.data.data);
    }).catch(err => console.log(err));
  }

	const textSVideos = [
    {
      thumbnail: "#",
      rating: 77,
    },
    {
      thumbnail: "#",
      rating: 77,
    },
    {
      thumbnail: "#",
      rating: 87,
    },
    {
      thumbnail: "#",
      rating: 79,
    },
    ,
    {
      thumbnail: "#",
      rating: 79,
    },
    {
      thumbnail: "#",
      rating: 79,
    },
    {
      thumbnail: "#",
      rating: 79,
    }
  ]

  return (
    <div className='col-span-1 grid grid-flow-row grid-cols-4 w-[100%] h-[50vh] gap-[var(--custom-gap)] overflow-y-auto'>
    {
      textSVideos.map(video => 
      <div className='col-span-1 flex flex-col items-center'>
        <img src={Thumbnail} className='w-[8rem] h-[auto]' />
        <p>Rating {video.rating}%</p>
      </div>)
    }
    </div>
  )
}

export default Gallery
