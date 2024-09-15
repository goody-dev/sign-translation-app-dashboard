import React from 'react'
import LoadingIcon from '../assets/icons/loading-circle.svg'

const ProcessingLoader = () => {
  return (
    <>
      <img className='processing-animation' src={LoadingIcon} alt="processing icon" aria-label='rotating processing icon' />
    </>
  )
}

export default ProcessingLoader
