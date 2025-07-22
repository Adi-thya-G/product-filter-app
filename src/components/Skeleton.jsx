import React from 'react'

function Skeleton({key}) {
  return (
   <div className='w-full h-[450px] p-1 border-2 border-gray-200 rounded-md  animate-pulse' key={key}>
    <div className='w-full h-3/5 bg-gray-300'>

    </div>
     <div className='py-2'>
       <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
     <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>

     </div>
   </div>
  )
}

export default Skeleton