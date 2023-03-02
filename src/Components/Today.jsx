import React from 'react'
import pressure from '../assets/pressure.svg'
import humidity from '../assets/humidity.svg'
import windspeed from '../assets/windspeed.svg'
import sunrise from '../assets/sunrise.svg'
import sunset from '../assets/sunset.svg'
import moment from 'moment'

export const Today = ({todayInfo}) => {
  return (
    <div className='w-11/12 mx-auto  mt-6 shadow-md bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg py-4 px-4 rounded-xl'> 
        {/* TOP */}
        <div className='flex justify-between flex-nowrap md:h-[36vh] lg:w-11/12 lg:mx-auto'>
            <div>
              <div><img src={`https://openweathermap.org/img/w/${todayInfo.weather[0].icon}.png`} className="h-32 w-32"  alt="" /></div>
              <h3 className='text-6xl font-normal py-2 '>{ `${Math.round(todayInfo.main.temp)}°c`}</h3>
              <h3 className=' py-2 text-xl'>{`${todayInfo.weather[0].main}, ${todayInfo.weather[0].description}`}</h3>
            </div> 
            <div className=''>
                <div className='flex gap-2 py-3 text-lg'><img src={sunrise} className="h-9 w-10" alt="" /><span>{`${moment((todayInfo.sys.sunrise + todayInfo.timezone - 3600)*1000).format("hh:mm A")}`}</span></div>
                <div className='flex gap-2 py-2 text-lg'><img src={sunset} className="h-7 w-10" alt="" /><span>{`${moment((todayInfo.sys.sunset + todayInfo.timezone - 3600) *1000).format("hh:mm A")}`}</span></div>
            </div>
        </div> 
        {/* BOTTOM */}
        <div className=' flex gap-5 lg:gap-8 mt-4 lg:mt-0 text-base font-light mb-4 lg:w-11/12 lg:mx-auto'>
            <div className='flex gap-2'> <img src={pressure} className="w-6 h-6" alt="" /> <span>{`${todayInfo.main.pressure} hPa`}</span>  </div>
            <div className='flex gap-2'> <img src={humidity} className="w-6 h-6" alt="" /><span>{`${todayInfo.main.humidity} %`}</span></div>
            <div className='flex gap-2'> <img src={windspeed} className="w-6 h-6" alt="" /> <span>{`${todayInfo.wind.speed} m/s`}</span>  </div>
        </div>
    </div>
  )
}
