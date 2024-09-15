import React, { useEffect, useState } from 'react'
import EnvelopeIcon from '../assets/icons/closed-blue-envelope.png'
import axios from 'axios'
import StatusPopUp from './StatusPopUp';
import ProcessingLoader from './ProcessingLoader';

const ContactUs = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [submitStatusPopup, setSubmitStatusPopup] = useState(null);

  const handleSubmitStatusPopup = () => {
    setSubmitStatusPopup(true);
  }

  useEffect(()=> {
    if(status === "success" || "failed") {
      handleSubmitStatusPopup();
      setTimeout(() => {
        setSubmitStatusPopup(null);
        setMessage('');
        setStatus(null);
      }, 4000);
    }
  }, [status])

  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(null);
  const [emptyEmail, setEmptyEmail] = useState(null);

  const [description, setDescription] = useState('');
  const [emptyDescription, setEmptyDescription] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const clearForm = () => {
    setEmail("");
    setDescription("");
  }

  const validateForm = () => {
    var validity = true;
    const testForValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/.test(email);

    if (email != '') {
      validity *= true;
      setEmptyEmail(false);
      if (testForValidEmail === true) {
        validity *= true;
        setInvalidEmail(false);
      } else {
        validity *= false;
        setInvalidEmail(true);
      }
    } else {
      validity *= false;
      setEmptyEmail(true);
    }

    if (description.length >= 1) {
      validity *= true;
      setEmptyDescription(false);
    } else {
      validity *= false;
      setEmptyDescription(true);
    }

    return validity;
  }

  const handleSubmit = async (event) => {
  
    event.preventDefault();
    const data = {
      email,
      description,
    }

    const validity = validateForm();

    if(validity == 1) {
      setStatus("pending");
      await axios.post('https://signs-5n09.onrender.com/contact',
        data, {
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then(res => {
          if(res.data.status === true) {
            setStatus("success");
            setMessage(res.data.message);
            //alert(res.data.message);
            clearForm();
          } else if(res.data.status === false) {
            setStatus("failed");
            setMessage(res.data.message);
            //alert(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
          setStatus("failed");
          setMessage("Something went wrong, pls try again");
          //alert("Something went wrong, pls try again");
        })
    }
  }

  return (
    <div id='contact-section' className='flex flex-col gap-[var(--custom-gap)] w-[100%] max-w-[100vw] py-[3rem] px-[1.5rem] sm:p-[var(--custom-padding)] bg-[#F3F4FF] sm:flex-row sm:flex-wrap sm:gap-0 '>
      <div className='w-[100%] sm:w-[50%]'>
        <h1 className='text-[var(--primary-color)] text-[4rem] leading-[4.8rem] font-bold'>Contact <br/><span className='text-[var(--secondary-color)]'>Us</span></h1>
        <p className='text-[var(--sub-headline-color)] text-[1.25rem] leading-[1.5rem]'>Get in touch with us. Feel free to help us with suggestions on how to improve this product.</p>
      </div>
      <form noValidate name='Contact Form' onSubmit={(event)=>handleSubmit(event)} className='flex flex-col gap-[var(--custom-gap)] w-[100%] bg-[var(--white-background)] p-[var(--card-padding)] px-[1.5rem] rounded-[var(--custom-radius)] sm:w-[50%] sm:px-[4.75rem]'>
        <div className='flex flex-col w-[100%]'>
          <label for='email' className='text-[var(--primary-color)] text-[1rem] leading-[2.4rem] font-semibold w-[100%]'>Email</label>
            {/* <div className='flex flex-row items-center gap-[0.25rem] w-[100%] bg-[var(--tertiary-background)] rounded-[var(--custom-radius)] px-[1.1rem] pe-0'>
              <img src={EnvelopeIcon}/> */}
            <input autoComplete='off' id='email' type='email' name='email' onChange={(event)=>handleEmailChange(event)} value={email} required tabIndex={0} placeholder='Enter your email address' className='email-input w-[100%] p-[var(--button-padding)] pl-[3.2rem] bg-[var(--tertiary-background)] rounded-[var(--custom-radius)] text-[#908E8E]'></input>
            {/* </div> */}
            {emptyEmail && <sub className='leading-[1.2rem] text-red-400' aria-live='assertive'>Pls provide your email</sub>}
            {invalidEmail && <sub className='leading-[1.2rem] text-red-400' aria-live='assertive'>Email is invalid, pls provide a valid email</sub>}
          </div>
        <div className='flex flex-col'>
          <label for='description' className='text-[var(--primary-color)] text-[1rem] leading-[2.4rem] font-semibold'>Description</label>
          <textarea id='description' type='text' name='description' onChange={(event) => handleDescriptionChange(event)} required tabIndex={0} value={description} className='bg-[var(--tertiary-background)] rounded-[var(--custom-radius)] p-[var(--button-padding)] h-[7rem] text-[1rem] leading-[2.4rem] text-[#908E8E]'></textarea>
          {emptyDescription && <sub className='leading-[1.2rem] text-red-400' aria-live='polite'>Pls provide a description</sub>}
        </div>
        <button type='submit' tabIndex={0} className='bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold sm:p-[var(--button-padding)] shadow-[var(--button-shadow)]'>{status==="pending"? <ProcessingLoader/>:"Submit"}</button>
      </form>
      {submitStatusPopup && <StatusPopUp status={status} message={message} />}
    </div>
  )
}

export default ContactUs
