import React, { useState } from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {updateQty,removeCartData} from '../store/auth'
function CartCard({element}) {
  const [qty,setqty]=useState(element?.qty)
  const dispatch=useDispatch()
  const navigate=useNavigate()
    const qtyFn=async(count)=>{
      if(!(qty+count<1))
      {  
         setqty((pre)=>pre+count)
         dispatch(updateQty({code:element?.code,
          qty:qty
         }))
      }
      
    }

    const RemoveCart=async()=>{
      dispatch(removeCartData({code:element?.code}))
    }
  return (
     <div className='w-full md:w-[600px] lg:w-[700px] rounded-md  bg-white shadow-md border-2 border-gray-200 shadow-zinc-100 relative'>
       <div className='absolute right-1 top-1 text-sky-600' title='product detail page' onClick={()=>navigate(`/product/${element?.code}`)}>
        <FiExternalLink />
       </div>
                 <p className='text-sm p-3'>{element?.brand}</p>
                 <div className='w-full grid grid-cols-[2fr,4fr] p-2'>
                  <div className='w-full  p-1 rounded-md flex justify-center'>
                 <img src={element?.img} alt="" className='w-20 h-32 md:w-24 md:h-36 rounded-md'/>
                 </div>
                 <div className='w-full h-full rounded-md grid grid-cols-1 md:grid-cols-3'>
                     <p className='text-[15px] flex justify-center p-2'>{element?.product_name}</p>
                     <div className='flex justify-center p-2'>

                      <div className='grid  grid-cols-3  border-2 border-gray-300 bg-gray-100 w-[110px] h-8 rounded-md'>
                       <button className='border-r border-r-gray-200' onClick={()=>qtyFn(1)}>+</button>
                       <span className='flex justify-center bg-white place-items-center'>{qty}</span>
                       <button className='border-l border-gray-200' onClick={()=>qtyFn(-1)}>-</button>
                         </div>
                       
                     </div>
                     <div className='flex justify-center '>
                      <button className='bg-red-100 p-2 w-12 h-12 flex justify-center rounded-md' onClick={()=>{
                        RemoveCart()
                      }}>

                         <RiDeleteBin5Line scale={20} className='text-2xl text-red-400'/>
                      </button>
                     
                     </div>
                 </div>
                 </div>
              </div>
  )
}

export default CartCard