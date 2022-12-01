import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard'

const zoneSize = 60

const zone = {
  1: '30% SITEWIDE OFF',
  2: 'BUY 1 GET 1 FREE',
  3: 'FREE COFFEE MUG ON PURCHASE WORTH 1000+',
  4: 'BUY 2 EFFERVESCENT TABLETS & GET 1 FREE',
  5: 'FREE 50G TEA ON PURCHASE OF RS.500',
  6: 'HOT CHOCOLATE FREE WITH TEA'
}

const WheelGame = () => {

  const [value, setValue] = useState(0)
  const [pause, setPause] = useState(false)
  const [style, setStyle] = useState({})
  const [won, setWon] = useState(0)
  const [couponCode, setCouponCode] = useState('XAXPDF20')

  const navigate = useNavigate()

  const spin = () => {
    setPause(!pause)
    let deg = Math.floor(2000 + Math.random() * 2000)
    setValue(deg)
    setStyle({
      transition: 'all 10s ease-out',
      transform: `rotate(${deg}deg)`
    })

  }

  const animation = () => {
    setPause(!pause)
    const actualDeg = value % 360
    setStyle({
      transition: 'none',
      transform: `rotate(${actualDeg}deg)`
    })
    
    let winningNum = Math.abs(Math.ceil((actualDeg + 30) / zoneSize))

    winningNum = winningNum === 0 ? 1 : winningNum >= 7 ? 6 : winningNum
    
    setWon(winningNum)
  }

  const handleCopy = (e) => {
    e.preventDefault()
    navigate('/')
  }
    
  return (
    <>
      <div className={`flex flex-col justify-center items-center gamePage relative ${won === 0 ? '' : 'hidden'}`}>
        <img src="images/wheel.svg" className='w-[350px] h-[350px] absolute min-[1200px]:w-[300px] min-[1200px]:h-[300px]' style={style} onTransitionEnd={animation} alt="" />
        <img src="images/arrow.svg" className='absolute w-10' alt="" />
        <button 
          className= {`absolute bottom-[22%] bg-[#146531] px-9 py-3 rounded-3xl font-bold text-[#fff] tracking-wider min-[750px]:bottom-[15%] min-[1200px]:bottom-[10%] hover:opacity-75 ${pause ? 'pointer-events-none' : ''}`}
          onClick={spin}
        >SPIN</button>
      </div>
      <div className={`${won > 0 ? '': 'hidden'} loginPage relative flex flex-col items-center justify-center`}>
        <div className='absolute top-[20%] w-[300px] left-5 flex flex-col items-center justify-center mx-4 min-[750px]:left-[30%] min-[1200px]:left-[58%]'>
          <h3 className='text-xl font-bold mb-2'>Congrats! You Won:</h3>
          <h1 className='text-[36px] font-black'>{zone[won]}</h1>
          <div className='flex items-center justify-center mt-6'>
          <input 
            type='text'
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className='h-14 w-60 pl-3 rounded-tl-lg rounded-bl-lg text-white bg-[#667a6d]'
          />
          <CopyToClipboard text={couponCode}>
            <label htmlFor="" className='bg-[#146531] h-14 w-20 text-center pt-4 rounded-r-lg text-[#F5F5F5] font-bold'>
            COPY
            </label>
          </CopyToClipboard>
          </div>
          <CopyToClipboard text={couponCode}>
            <button className='w-80 bg-[#146531] mt-10 h-16 rounded-2xl text-[#F5F5F5] font-bold text-lg' onClick={handleCopy}>Close Panel & Copy</button>
          </CopyToClipboard>
          <p className='text-[12px] mt-2'>*You can claim your coupon for 10 minutes only!</p>          
        </div>
      </div>
    </>
  )
}

export default WheelGame

