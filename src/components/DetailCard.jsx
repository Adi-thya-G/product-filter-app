import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import {addCartData,removeCartData} from '../store/auth'
function DetailCard({data,cartData}) {
 const nutriments = {
  energy_kcal: data?.nutriments?.["energy-kcal_100g"] ?? 0,
  fat: data?.nutriments?.fat_100g ?? 0,
  saturated_fat: data?.nutriments?.["saturated-fat_100g"] ?? 0,
  carbohydrates: data?.nutriments?.carbohydrates_100g ?? 0,
  sugars: data?.nutriments?.sugars_100g ?? 0,
  fiber: data?.nutriments?.fiber_100g ?? 0,
  proteins: data?.nutriments?.proteins_100g ?? 0,
  salt: data?.nutriments?.salt_100g ?? 0,
}
 
  const dispatch=useDispatch()
  const [isItemInCart, setItemCart] = useState(() =>
  cartData?.some((ele) => ele?.code == data?.code)
);

       console.log(cartData?.some((ele)=>ele.code===data?.code))
  useEffect(()=>{
    setItemCart(() =>
  cartData?.some((ele) => ele?.code === data?.code)
);
  },[cartData,cartData?.some((ele)=>ele.code===data?.code) ])

  const addCart=async()=>{
       dispatch(addCartData({
        code:data?.code,
        img:data?.image_url,
        brand:data?.brands,
        product_name:data?.product_name,
        qty:1
       }))
       setItemCart(true);
  }

  const RemoveFromCart=async()=>{
    dispatch(removeCartData(
      {
        code:data?.code
      }
    ))
    setItemCart(false)
  }

 

  if(!data|| !nutriments)
     return <div>loading</div>
  const navigate=useNavigate()
  return (
   <div className='w-full h-full p-2 flex justify-center relative pt-8'>
     <div className='absolute  bg-neutral-200 left-1 top-1 p-3 lg:p-4 rounded-full m-1 cursor-pointer z-50' onClick={()=>navigate("/")} 
       
         >
     < FaArrowLeft  className='text-sky-400 text-[16px] md:text-xl'/>
         </div>
      <div className=' grid p-3 grid-cols-1 bg-slate-50 border-2 border-neutral-300 rounded-md shadow-md shadow-neutral-200 grid-flow-row md:grid-cols-2 lg:p-4 lg:w-[80%] ' >
       <div className='w-full p-5 flex justify-center place-items-center bg-white  relative '>

        <img src={data?.image_url
} alt="" className='w-40 max-h-80'/>
         
       </div>
       <div className='flex flex-col justify-center gap-3 font-poppins lg:py-10 lg:p-6 lg:gap-4'>
          <h4 className=' text-[16px] md:text-xl lg:text-2xl  pb-3'>{data?.product_name}</h4>
          <h6 className='text-sm'><span className='font-semibold text-[14px] lg:text-[16px]  pr-1'>brands:</span> {data?.
brands}</h6>
          <p className='text-sm'> <span className='font-semibold text-[14px] lg:text-[16px] pr-1'>Ingredients:</span>{data?.ingredients_text
}</p>
          <p className='text-sm'>
            <span className='font-semibold text-[14px] lg:text-[16px] pr-1'>labels:</span>
            {data?.labels_tags?.map((ele)=>(ele))}
          </p>

          <div className='flex justify-center py-3'>
            <button className='w-28 h-12 rounded-md bg-orange-400 text-white border-2 border-orange-200'
            onClick={()=>{
              if(isItemInCart)
              {
            RemoveFromCart()
              }
              else{
              addCart()
              }
            }}
            
            >{
              !isItemInCart?"Add Cart":"Remove cart"
            }</button>
          </div>
          <div className='w-full '>
    <table className="min-w-full divide-y divide-gray-200 border-2 border-gray-300 rounded-lg overflow-hidden ">
  <thead className="bg-gray-100">
    <tr>
      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Nutrient</th>
      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Amount</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
    <tr>
      <td className="px-4 py-2">Energy ({data?.nutriments?.energy_unit})</td>
      <td className="px-4 py-2">{nutriments?.energy_kcal}</td>
    </tr>
    <tr>
      <td className="px-4 py-2">Carbohydrates</td>
      <td className="px-4 py-2">{nutriments?.carbohydrates
} {data?.nutriments?.carbohydrates_unit}</td>
    </tr>
    <tr>
      <td className="px-4 py-2">Sugars</td>
      <td className="px-4 py-2">{nutriments?.sugars}g</td>
    </tr>
    <tr>
      <td className="px-4 py-2">Fat</td>
      <td className="px-4 py-2">{nutriments?.fat} {data?.nutriments?.fat_unit}</td>
    </tr>
    <tr>
      <td className="px-4 py-2">Saturated Fat</td>
      <td className="px-4 py-2">{nutriments?.saturated_fat} {data?.nutriments?.saturatedfat_unit}</td>
    </tr>
    <tr>
      <td className="px-4 py-2">Proteins</td>
      <td className="px-4 py-2">{nutriments?.proteins} g</td>
    </tr>
    <tr>
      <td className="px-4 py-2">Fiber</td>
      <td className="px-4 py-2">{nutriments?.fiber} g</td>
    </tr>
    <tr>
      <td className="px-4 py-2">Salt</td>
      <td className="px-4 py-2">{nutriments?.salt} g</td>
    </tr>
  </tbody>
</table>

          </div>
       </div>
      </div>

    </div>
  )
}

export default DetailCard