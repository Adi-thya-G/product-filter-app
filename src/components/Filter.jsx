import React ,{useState}from 'react'
import { RxCross2 } from "react-icons/rx";
import {fetchDataByCategory} from '../lib/api'
 const categories = [
    'all',
    'beverages',
    'dairies',
    'snacks',
    'cereals',
    'desserts',
    'meals',
    'fruits',
    'vegetables',
    'bakery-products',
    'breakfasts',
    'sauces',
    'plant-based-foods',
    'baby-foods',
    'seafood',
    'meat',
    'cheeses',
    'sweeteners',
    'soups',
    'oils',
    'spreads',
    'frozen-foods',
  ];
function Filter({filter,setfilter,setdata, setloading}) {
  const [open, setOpen] = useState("");
  const [checked,setchecked]=useState("")
  
  const categoryFn=async(id)=>{
    setloading(true)
  fetchDataByCategory(id).then((res)=>{
    setdata(res.data.products)
    setloading(false)
  }).catch((error)=>{
    setloading(false)
  })
  }


  const openClick=(element)=>{
    if(open===element)
    {
      setOpen("")
    }
    else{
      setOpen(element)
    }


  }
  return (
    <aside className={`  fixed scroll-smooth inset-x-0 inset-y-0.5 overflow-y-auto  bg-white border-r-2 border-2 border-zinc-100     w-[90%] xs-range:w-[280px] sm:w-[320px]  gap-3 p-3  z-50 transition-transform duration-700 ${filter?"translate-x-0":"translate-x-ful"}`}>
    <div className=  'flex justify-between p-1 w-full row-span-2 overflow-y-hidden'>
     <h2 className='font-serif'>Filter</h2>
      <button className='flex' onClick={()=>setfilter((pre)=>!pre)}><RxCross2 size={25}/></button>
    </div>
    <div className=  ' w-full  row-span-11 font-sans'>
      <ul className="p-2">
      <li className="font-semibold mb-1">
        <button onClick={() => openClick("Category")} className="w-full text-left">
          Category
        </button>
        {open=="Category" && (
          <ul className="ml-4 mt-1 text-gray-600">
            {
              categories.map((ele)=>(
                <li className=" cursor-pointer flex gap-2"> <input type="radio" name='Category' checked={checked==ele} value={ele} onClick={(e)=>{
                  setchecked(e.target.value)
                  categoryFn(e.target.value)
                }}  className=''/> {ele}</li>
              ))
            }
          </ul>
        )}
        <hr  className='w-full mt-2'/>
      </li>
     
      
     
    </ul>
    </div>
    </aside>
  )
}

export default Filter