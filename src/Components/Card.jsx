import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp} from "react-icons/io";


export default function Card({beer,setSelectedBeer}) {
  const [showMore ,setShowMore] = useState(false);
  const handleClick =() =>{
    setSelectedBeer(beer);
    console.log(beer);
    document.documentElement.scrollTo({
      top: document.documentElement.scrollHeight+500,
      behavior: 'smooth'
    });
  }
  return (
    <div className='justify-between group h-[inherit] border-x-2 mb-5 shadow-lg max-w-[fit-content] flex flex-col rounded' style={{borderRight:'2px solid #cccccc'}}>
        <div className='p-4 w-[fit-content] border-b-2 relative' >
            <img className='hover:scale-110 duration-150 hover:-hue-rotate-180 h-[250px] w-[300px] object-contain ' src={beer.image_url} alt="image unavailable" />
            <span className='group-hover: w-[fit-content] group-hover:opacity-100 duration-200 absolute top-[-20px] text-white opacity-0 overflow-hidden right-0 p-1 rounded-2xl bg-red-400'>{beer.tagline}</span>
        </div>
        <div className='relative p-2'>
            <h1 className='text-xl max-w-[300px] h-[fit-content] text-center text-[20px]  text-wrap font-sans font-semibold text-red-400'>{beer.name}</h1>
          <div>
          <p className='text-wrap max-w-[300px] text-gray-500 '>{!showMore?beer.description.substring(0,100)+'...':beer.description}</p>
          <button className='flex items-center text-blue-600' onClick={()=>setShowMore((prev) => !prev)}>show more {showMore?<IoIosArrowUp/>:<IoIosArrowDown />}</button>
          </div>
          <div>
            <p  className='flex flex-col gap-1 max-w-[300px]'><span className='text-red-600'>Try With :</span> {beer.food_pairing.slice(0,3).map((item,i) => <span className='font-semibold bg-slate-200' key={i}>{i+1+'.'+item}</span>)}</p>
          </div>
        </div>
        <button className='p-2 m-2 text-white duration-200 bg-blue-600 bottom-2 rounded-xl hover:text-lg' onClick={handleClick}> Click to Know more</button>
    </div>
  )
}
