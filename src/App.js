import './App.css';
import React, { useState } from 'react'
import axios from 'axios';
import Searchbar from './Components/Searchbar';
import { Localinfo } from './Components/Localinfo';
import { Today } from './Components/Today';
import { apiCall } from './Api';

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState({})
  const [error, setError] = useState('')
  const url = process.env.REACT_APP_API_URL   
  const key = process.env.REACT_APP_API_KEY

  const handleInputChange = e => {setSearch(e.target.value)}

  const handleSearch = async (e) => {
    //prevent reload
    e.preventDefault()
    //fetch data from server
    if (search) {
        try {
        const response = await axios(apiCall(url, search, key))
        setData(response)
        setError({})
        console.log(response);
      } catch (error) {
        setError(error.response)
        setData({})
        console.log(error.response);
      }
    }
    
     
  }

// useEffect(()=>{
//   fetchData('abuja')
// },[])


  return (
    // container for entire app
    <div className="App bg-[#89CFF0] min-h-[100vh] pt-8"> 
      <Searchbar value={search} onChange={handleInputChange} onSubmit={handleSearch} />
      <div className='md:grid grid-cols-2 gap-8'>
        {
          data.status === 200 ? <><Localinfo Localinfo={data.data} /><Today todayInfo={data.data} /></> : error.status > 200 ? 
          <div className='text-center col-span-2 mt-32 text-3xl text-slate-800'><p>Sorry, We do not have information on that</p> <p>{`${error.status}: ${error.statusText}`}</p></div> : <div></div>
        }
        
        
      </div>
      
    </div>
  );
}

export default App;
