import React from 'react'
const svg = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-gray-800 inline"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>

const Searchbar = ({value, onChange, onSubmit }) => {
  return (
    <div className=' bg-slate-100 w-10/12 mx-auto  rounded-3xl h-10 pt-[9px] lg:pt-[6px] pl-2'>
            <span className=''>{svg}</span>
            <span><input type='text' value={value} onChange={onChange} onSubmit={onSubmit} className=' w-10/12 lg:w-11/12 mx-auto bg-inherit outline-none ml-2' /> </span>
    </div>
  )
}

export default Searchbar