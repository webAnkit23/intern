import React from 'react'

export default function Details({selectedBeer}) {
  return (
    <div className='flex flex-col p-4 lg:flex-row'>
               <img className='md:min-w-[500px] h-[500px]  object-contain m-2 flex-wrap' src={selectedBeer.image_url}></img>
               <div>
                <div className='relative flex flex-col lg:flex-row'>
                <h2 className='text-[50px]'>{selectedBeer.name}</h2>
                <span className='lg:absolute  bottom-[-30px] text-red-400 text-[25px]'>({selectedBeer.tagline})</span>
                </div>
                <h1 className='mt-[30px] border-b-2 pb-2 '>{selectedBeer.description}</h1>
                <h1 className='pb-2 border-b-2'>Contributed By : <span className='text-blue-500'>{selectedBeer.contributed_by}</span></h1>
               <div className='flex flex-col gap-2 p-2 mt-2 bg-slate-200 w-fit'>
                <span>FIRST BREWED : {selectedBeer.first_brewed}</span>
                <span>LEVEL :{selectedBeer.attenuation_level}</span>
                <span>EBC : {selectedBeer.ebc}</span>
                <span>PH :{selectedBeer.ph}</span>
               </div>
               <p  className='flex flex-col gap-1 max-w-[300px]'><span className='text-red-600'>Try With :</span> {selectedBeer.food_pairing.map((item,i) => <span className='font-semibold bg-slate-200' key={i}>{i+1+'.'+item}</span>)}</p>
               <h1 className='pt-2 pb-2 font-semibold text-blue-700 border-b-2'>Tips : {selectedBeer.brewers_tips}</h1>
               
               </div>
               </div>
  )
}
