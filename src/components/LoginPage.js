import React, { useEffect, useRef, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
// import axios from '../api/axios';

// const LOGIN_URL = '/auth'

const EMAIL = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
const PHONE_NO = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

const LoginPage = () => {

  const userRef = useRef()
  const errRef = useRef()

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [checked, setChecked] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validPhoneNo, setValidPhoneNo] = useState(false)

  useEffect(()=> {
    userRef.current.focus()
  }, [])

  

  useEffect(() => {
    const result = EMAIL.test(email)
    setValidEmail(result)
  }, [email])

  useEffect(() => {
    const result = EMAIL.test(email)
    setValidPhoneNo(result)
  }, [phoneNo])

  useEffect(() => {
    setErrMsg('')
  }, [email, phoneNo])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(user, pwd);
  
    // try {
    //     const response = await axios.post(LOGIN_URL, 
    //         JSON.stringify({email, phoneNo}),
    //         {
    //             headers: {'Content-Type': 'application/json'},
    //             withCredentials: true
    //         }
    //     )
    //     console.log(JSON.stringify(response?.data));
    //     const accessToken = response?.data?.accessToken
    //     setEmail('')
    //     setPhoneNo('')
          navigate('/auth')
    // } catch (err) {
    //     if (!err?.response){
    //         setErrMsg('No Server Response')
    //     } else if (err.response?.status === 400) {
    //         setErrMsg('Missing Username or password')
    //     } else if (err.response?.status === 401) {
    //         setErrMsg('Unauthorised')
    //     } else {
    //         setErrMsg('Login Failed')
    //     }
    //     errRef.current.focus()
    // }
    
  }

  return (
    <div className="flex flex-col justify-center items-center loginPage">

      <div className='w-[90%] flex items-center flex-col min-[750px]:w-[250px] min-[750px]:ml-24 min-[1200px]:ml-80 min-[1200px]:mt-2 min-[1200px]:-mr-16'>

        <h1 className='text-[1.8rem] font-bold mb-4 min-[750px]:text-[1.2rem]'>
          This is how EngageBud looks like in action!
        </h1>

        <form>
          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>

          <div className='flex bg-[#fefefe] items-center mb-3 rounded-md'>
            <FiMail size='1.5rem' className='ml-2 mr-2'/>
            <div>
              <p className={validEmail ? 'hidden' : 'errmsg'}>Enter a valid email</p>
              <label htmlFor="email" className='block text-xs mt-2 text-[#49454F] min-[750px]:mt-1'>Email</label>
              <input 
                className='outline-none pb-2 text-[#49454F] min-[750px]:pb-1'
                type="email"
                ref={userRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className='flex bg-[#fefefe] items-center mb-3 rounded-md'>
            <MdOutlineLocalPhone className='ml-2 mr-2' size='1.5rem'/>
            <div>
            <p className={validPhoneNo ? 'hidden' : 'errmsg'}>Enter a valid Phone No</p>
              <label htmlFor="phone" className='block text-xs mt-2 text-[#49454F] min-[750px]:mt-1'>Phone Number</label>
              <input 
                className='outline-none pb-2 text-[#49454F] min-[750px]:pb-1'
                type="text"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
          </div>

          <div className='flex border-[1.5px] border-black rounded-md mt-4  min-[750px]:mt-2'>
            <input 
              type="checkbox"
              onChange={(e) => setChecked(e.target.checked)}
              className='w-10 m-2 min-[750px]:w-8'
            />
            <div>
              <p className='text-[10.5px] pl-1 pt-3 min-[750px]:text-[7px] min-[750px]:pt-1 min-[750px]:pl-0'>I agree to receiving recurring automated messages at the number I have provided.</p>
              <p className='text-[10px] pl-1 pb-3 min-[750px]:text-[7px] min-[750px]:pb-1 min-[750px]:pl-0'>Consent is not a condition to purchase</p>
            </div>
          </div>

          <button disabled={!checked} onClick={handleSubmit} className='w-full mt-4 h-20 rounded-full font-black text-3xl text-[#fefefe] bg-[#146531] disabled:opacity-75 min-[750px]:h-12 min-[750px]:text-xl min-[750px]:mt-3'>Try your luck</button>

        </form>
        
          <p className='text-[11.5px] items-center mt-3 min-[750px]:text-[5px]'>*You can spin the wheel only once! <span className='max-[749px]:hidden'>*If you win, you can claim your coupon for 10 minutes only!</span></p>
          
          <p className='text-[11.5px] min-[750px]:hidden'>*If you win, you can claim your coupon for 10 minutes only!</p>
        
          <p className='flex items-center font-bold mt-3 text-lg min-[750px]:-mr-20 min-[750px]:text-[12px]'>No, I don't feel lucky <RxCross1 size='1.5rem' className='ml-1'/></p>
      </div>
      
    </div>
  )
}

export default LoginPage