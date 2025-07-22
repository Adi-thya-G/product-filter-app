import React, { useEffect, useState } from 'react'
import { BsCart2 } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {searchData,barcodeData} from '../lib/api'

function isNumeric(value) {
  return /^\d+$/.test(value);
}
function SearchBar({data,setdata}) {
  const selector=useSelector((state)=>state.auth.cartData)
  const [count,setcount]=useState(selector?.length)
  const [search,setsearch]=useState("")

  useEffect(()=>{
    if(isNumeric(search))
    {
barcodeData(search).then((res)=>{
  if(res.data.status)
  { 
    setdata([res?.data?.product])
  }

})
    }
    else
    {
    searchData(search).then((res)=>setdata(res?.data?.products))
    }
  },[search])
  const navigate=useNavigate()
 
  return (
    <div className='w-full bg-dark_blue  rounded-b-xl  flex flex-col justify-center md:flex-row gap-3 p-3 sticky'>
      <div className='w-full pt-4 pl-3  flex justify-between gap-3'>
       <div className='  p-1 rounded-full flex justify-between gap-3  w-18 h-18'>
                    <img src="https://meadi.vercel.app/assets/adithya-BbUgxmQW.jpg" alt="" className='rounded-full object-cover w-16 h-16'/>
                   <div className='h-full flex flex-col justify-center place-item-center'>
                     <h3 className='text-white font-sans line-clamp-1 '>Adithya karmarkar g</h3>
                   </div>
                    
                  </div>
                  <span className=' rounded-full p-2 bg-zinc-100 relative w-12 h-12 flex justify-center md:hidden'  onClick={()=>navigate("cart")}>
            <span className='bg-red-400 w-4 h-4 absolute right-1  -top-1 rounded-full text-white text-[10px] text-center'>{count}</span>
            < BsCart2 size={20}  className='border-1 border-blue-400 text-gray-700 '/></span>
      </div>
        <div className='flex justify-center p-3 gap-5 w-full 2xl:px-10'>
           <input type="search" name="" id="" className='outline-none placeholder-font-sans outline-2 shadow-md shadow-slate-200 h-12 outline-slate-100 w-full sm:w-[90%] lg:w-[80%] xl:w-[80%]  2xl:flex-1 rounded-2xl px-2 py-2' placeholder='Search ...' value={search} onChange={(e)=>setsearch(e?.target?.value)}/>
            <span className=' rounded-full p-2 bg-zinc-100 relative w-12 h-12 hidden md:flex md:justify-center cursor-pointer' onClick={()=>navigate("cart")}>
            <span className='bg-red-400 w-4 h-4 absolute right-1  -top-1 rounded-full text-white text-[10px] text-center'>{count}</span>
            < BsCart2 size={20}  className='border-1 border-blue-400 text-gray-700 '/></span>
         </div>
    </div>
  )
}

export default SearchBar