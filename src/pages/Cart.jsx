import React, { useState } from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import CartCard from '../components/CartCard';
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
function Cart() {
const navigate=useNavigate()
const cartData=useSelector((state)=>state.auth.cartData)
  console.log(cartData)

  return (
    <div className='w-full p-1 '>
      <div className='w-full bg-white shadow-md shadow-neutral-200 border-2 border-gray-100 flex justify-center flex-col relative'>
        <div className='absolute  bg-neutral-200 left-1 p-3 top-1 rounded-full m-1 cursor-pointer z-50' onClick={()=>navigate("/")} 
               
                 >
             < FaArrowLeft  className='text-sky-400 text-[16px] md:text-xl '/>
                 </div>
        <h2 className='w-full flex justify-start p-3 font-poppins text-[17px] md:text-xl lg:text-2xl pl-20 '>My Cart</h2>
           <hr className="w-full h-0.5 bg-gray-300 border-0 my-4" />

            <div className='w-full grid grid-cols-1 place-items-start  gap-3 justify-center p-1 pt-5  '>

              {
                cartData.map((ele)=>(
                 <CartCard element={ele}/>
                ))
              }

            </div>

      </div>

    </div>
  )
}

export default Cart