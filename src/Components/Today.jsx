import React from 'react'
import pressure from '../assets/pressure.svg'
import humidity from '../assets/humidity.svg'
import windspeed from '../assets/windspeed.svg'
import sunrise from '../assets/sunrise.svg'
import sunset from '../assets/sunset.svg'
const cloud = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-24 h-24"><path fillRule="evenodd" d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z" clipRule="evenodd" /></svg>


export const Today = ({today}) => {
  return (
    <div className='w-11/12 mx-auto  mt-6 shadow-md bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg py-4 px-4 rounded-xl'> 
        {/* TOP */}
        <div className='flex justify-between flex-nowrap md:h-[36vh]'>
            <div>
              <div>{cloud}</div>
              <h3 className='text-6xl font-normal py-2 '>32°C</h3>
              <h3 className=' py-2 text-xl'>Clear, Sunshine</h3> 
            </div> 
            <div className=''>
                <div className='flex gap-2 py-3 text-lg'><img src={sunrise} className="h-9 w-10" alt="" /><span>06:45 A.M</span></div>
                <div className='flex gap-2 py-2 text-lg'><img src={sunset} className="h-7 w-10" alt="" /><span>07:00 P.M</span></div>
            </div>
        </div> 
        {/* BOTTOM */}
        <div className=' flex gap-5 lg:gap-8 mt-4 lg:mt-0 text-base font-light mb-4'>
            <div className='flex gap-2'> <img src={pressure} className="w-6 h-6" alt="" /> <span>1011 hPa</span>  </div>
            <div className='flex gap-2'> <img src={humidity} className="w-6 h-6" alt="" /><span>75%</span></div>
            <div className='flex gap-2'> <img src={windspeed} className="w-6 h-6" alt="" /> <span>6.7m/s NW</span>  </div>
        </div>
    </div>
  )
}
