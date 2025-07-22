import React from 'react'
import nutritionGrades from '../lib/nutritionGrades'
import { useNavigate } from 'react-router';

function Card({element}) {
 const gradeKey = element?.nutrition_grade_fr?.toLowerCase(); // "d"
 const gradeInfo=nutritionGrades[gradeKey]
const navigate=useNavigate()

 const onclik=async()=>
 {
 navigate(`product/${element?.code}`)
 }

  return (
   <div className='bg-white shadow-lg rounded-t-md shadow-slate-200 flex flex-col border-2 border-gray-200 h-full p-1'  key={element?._id} onClick={onclik}>
    {/* Product Image */}
    <div className='w-full flex justify-center bg-gray-200 p-1 '>
      <img src={element?.image_url} alt="" className=' h-[250px] object-fit' />
    </div>
     <div className='p-3 flex flex-col gap-2'>
      <h2 className='text-[16px] font-semibold text-gray-800 line-clamp-1 hover:underline cursor-pointer'> {element.product_name} {element.brands}- {element?.quantity}</h2>
       <p className="text-sm text-gray-600 line-clamp-2"><span className=" font-semibold">Category:</span> {element?.categories?.split(",").map((ele,index)=>index==0?"":ele+" ")}</p>
       <p className="text-sm text-gray-600 line-clamp-2"><span className=" font-semibold">Ingredients:</span>{element?.ingredients_text}</p>
       <div className='flex gap-3 justify-start place-items-center '>
          <span className='text-sm text-gray-600 line-clamp-2  font-semibold'>Nutrition Grade:</span>
          <span className={`w-7 h-7 flex justify-center  place-items-center ${gradeInfo?.color} rounded-full text-sm font-poppins  text-white`}>{gradeInfo?.label
}</span>
       </div>
     </div>

   </div>

  )
}

export default Card