
import React, { useState } from 'react'
import Card from './Card'
import Details from '../Details';
export default function Display({data}) {
  const [selectedBeer ,setSelectedBeer]  = useState(null);
  return (
    <>
    <div className='p-6 bg-slate-100' >
        <h1 className='text-[50px] mb-4 text-black font-semibold font-sans'>Choose your favorite beer</h1>
        <div className='flex flex-wrap justify-center gap-4'>
            {data&&data.map((beer,i) =>{
                return <Card key={i} beer={beer} setSelectedBeer ={setSelectedBeer}/>
            })}
        </div>
    </div>
    <div className='flex flex-col items-center justify-center mb-10 '>
      <h1 className='text-[50px] border-b-2 w-[100%] p-3'>Details</h1>
      
      {selectedBeer&&<Details selectedBeer ={selectedBeer}/>}
    </div>
    </>
  )
}
