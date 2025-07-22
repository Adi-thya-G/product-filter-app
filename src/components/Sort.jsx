import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import {sort} from '../lib/api'
function Sort({data,setdata,setloading}) {
  const [checked,setchecked]=useState("")


  function sortAtoZ() {
  setloading(true);
  const sorted = [...data].sort((a, b) =>
    a.product_name?.localeCompare(b.product_name, 'en', {
      sensitivity: 'base',
    })
  );
  setdata(sorted);
  setloading(false);
}

function sortZtoA()
  {
    setloading(true);
   const sorted = [...data].sort((a, b) =>
  b.product_name?.localeCompare(a.product_name, 'en', { sensitivity: 'base' }))
          
          setdata(sorted)
          setloading(false)
  }

  
function nutritionSortEtoA()
{ setloading(true);
  const sorted = [...data].sort((a, b) =>
  b.nutrition_grade_fr?.localeCompare(a.nutrition_grade_fr, 'en', { sensitivity: 'base' }))
        
          setdata(sorted)
          setloading(false)
}

function nutritionSortAtoE()
{   setloading(true);
    const sorted=  [...data].sort((a, b) =>
          a.nutrition_grade_fr.localeCompare(b.nutrition_grade_fr, 'en', {
            sensitivity: 'base',
          }))
          
          setdata(sorted)
          setloading(false)
  }
  return (
    <aside className=' absolute   w-56 h-60 bg-white shadow-sm shadow-slate-100 border-2 rounded-md border-gray-200 scroll-smooth overflow-y-auto  right-0 lg:right-20 '>
     <div className='flex flex-col w-full h-full justify-center p-3 gap-4'>
    
      <ul className="  text-sm flex flex-col gap-4">
   
    
    <li className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
      <input type="radio" name="sort" id="name-asc" className="accent-blue-600" value="a_z" checked={checked==="a_z"} onChange={(e)=>{setchecked(e.target.value)
        sortAtoZ()
      }}  />
      <label htmlFor="name-asc" className="cursor-pointer w-full">Product Name (A–Z)</label>
    </li>

    <li className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
      <input type="radio" name="sort" id="name-desc" className="accent-blue-600" value="z_a" checked={checked==="z_a"} onChange={(e)=>{setchecked(e.target.value)
         sortZtoA()
      }}/>
      <label htmlFor="name-desc" className="cursor-pointer w-full">Product Name (Z–A)</label>
    </li>

    <li className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
      <input type="radio" name="sort" id="grade-asc" className="accent-blue-600" value="a_e" checked={checked==="a_e"} onChange={(e)=>{setchecked(e.target.value)
        nutritionSortAtoE()
      }} />
      <label htmlFor="grade-asc" className="cursor-pointer w-full">Nutrition Grade (A → E)</label>
    </li>

    <li className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
      <input type="radio" name="sort" id="grade-desc" className="accent-blue-600" value="e_a" checked={checked==="e_a"} onChange={(e)=>{setchecked(e.target.value)
         nutritionSortEtoA()
      }} />
      <label htmlFor="grade-desc" className="cursor-pointer w-full">Nutrition Grade (E → A)</label>
    </li>
    
  
  </ul>
     <div className='flex   justify-center'> 
      
     </div>
     </div>
    </aside>
  )
}

export default Sort