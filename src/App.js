import './App.css';
import React, { useEffect } from 'react'
import axios from 'axios';
import Searchbar from './Components/Searchbar';
import { Localinfo } from './Components/Localinfo';
import { Today } from './Components/Today';
// import { apiCall } from './Api'

const key = process.env.REACT_APP_API_KEY

function App() {
  const fetchData = async (location) => {
    try{
      const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`,{
        headers: {
          appid: key,
        }
      })
      console.log(response.data);
  } catch (error) {
    console.log(error.response)
  }
}
// useEffect(()=>{
//   fetchData('abuja')
// },[])


  return (
    // container for entire app
    <div className="App bg-[#89CFF0] min-h-[100vh] pt-8"> 
      <Searchbar />
      <div className='md:grid grid-cols-2 gap-8'>
        <Localinfo />
        <Today />
      </div>
      
    </div>
  );
}

export default App;
