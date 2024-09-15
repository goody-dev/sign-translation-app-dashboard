import React, { useEffect, useState } from 'react'
import VideoRecorder from '../Features/VideoRecorder'
import StatusPopUp from '../Components/StatusPopUp';

const ContributeVideo = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [submitStatusPopup, setSubmitStatusPopup] = useState(false);

  const handleSubmitStatusPopup = () => {
    setSubmitStatusPopup(true);
  }

  useEffect(()=> {
    if(status === "success" || "failed" || "info") { 
      handleSubmitStatusPopup();
      setTimeout(() => {
        setSubmitStatusPopup(false);
        setMessage('');
        setStatus(null);
      }, 5000);
    }
  }, [status])

  const handlePopInfo = (status, message) => {
    setMessage(message);
    setStatus(status);
  }

  return (
    <div className='flex flex-col justify-center items-center gap-[var(--custom-gap)] bg-[var(--tertiary-background)] w-[100%] md:h-[calc(100vh-97.19px)] max-w-[100vw] py-[3rem] px-[1.5rem] sm:p-[var(--custom-padding)]'>
      <div className='flex flex-col text-center'>
        <h1 className='font-bold text-[2rem]'>Contribute Video</h1>
        <p className='text-[1rem] text-[var(--input-color)]'>Capture a sign language video you wish to contribute to our database</p>
      </div>
      <div className='flex flex-col items-center gap-[2.5rem] w-[100%]'>
        <VideoRecorder textId={""} currentText={""} handlePopInfo={handlePopInfo} />
      </div>
      {submitStatusPopup && <StatusPopUp status={status} message={message} />}
    </div>
  )
}

export default ContributeVideo
