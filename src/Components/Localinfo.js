import React from 'react'

export const Localinfo = ({city, country, date, time}) => {
    city='Lagos'
    country = 'Nigeria'
    date= 'Wednesday, 1 March'
    time='21:00'
  return (
    //container for localinfo
    <div className='py-6 w-11/12 mx-auto text-center mt-6 shadow-md bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded-xl flex flex-col flex-nowrap justify-center '> 
        <div className='pt-6 pb-6 text-4xl lg:text-6xl font-normal font-sans'>{city}, {country}</div>
        <div className='py-2 text-2xl lg:text-3xl font-light'>{date}</div>
        <div className='py-4 font-serif text-2xl font-extralight'>{time}</div>
    </div>
  )
}
