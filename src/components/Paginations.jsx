import React from 'react'
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
function Paginations({pageCount,setId}) {
  

  const pageFn=async(count)=>{
       setId((pre)=>pre+count)
  }
  return (
    <div className=' w-full p-2 pt-10 flex justify-between gap-4'>
      <button className='bg-sky-500 w-[100px] h-10 text-white  md:w-32 md:text-xl md:h-12 font-serif rounded-md flex justify-center place-items-center gap-2'
      onClick={()=>pageFn(-1)}
      >
        <GrFormPreviousLink/>
        previous</button>
      <span className='flex justify-center place-items-center'>{
        pageCount?.page
        }/{pageCount?.page_count}</span>
         <button className='bg-sky-500  w-[100px] h-10 text-white md:w-32 md:text-xl md:h-12 font-serif rounded-md flex justify-center place-items-center gap-2'
         onClick={()=>pageFn(1)}
         >next <GrFormNextLink/></button>
    </div>
  )
}

export default Paginations