import React, { useEffect,useState } from 'react'
import { PiBeerBottleFill } from "react-icons/pi";
export default function Search({handleFilterData}) {
  const [query ,setQuery] = useState('');
  useEffect(() =>{
      handleFilterData(query);   
  },[query]);
  return ( 
     <div className='flex flex-wrap items-center justify-around gap-2 p-3 bg-red-400 container-full'>
    <div className='text-[25px] text-white font-semibold'>It's Time for a cold beer</div>
        <div className='flex items-center gap-2 shadow bg-white w-[300px] rounded-lg p-2'>
          <PiBeerBottleFill size={30}/>
          <input className=' focus:outline-none h-[30px]' value={query} onChange={(e) =>setQuery(e.target.value)} placeholder='Enter beer to search..'/>
        </div>
     </div>
  )
}
