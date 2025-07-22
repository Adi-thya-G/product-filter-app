import React, { useState, useEffect } from "react";
import { BiHeart } from "react-icons/bi";
import { FiTag } from "react-icons/fi";
import { MdFilterAlt } from "react-icons/md";
import { BsSortDown } from "react-icons/bs";
import Filter from "./Filter";
import Sort from "./Sort";
import Card from "./Card";
import Paginations from './Paginations'
import { getDataPageNumber,fetchDataByCategory } from "../lib/api";
import Skeleton from './Skeleton'
import NoDataFound from './NoDataFound'
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

function Product({data,setdata}) {
  const [filter, setfilter] = useState(false);
  const [sort, setsort] = useState(false);
  
  const [page,setpage]=useState({})
  const [id,setId]=useState(1)
  const [loading,setloading]=useState(false)

  const [category,setcategory]=useState("")
  const sortFn = () => {
    if (sort) {
    }

    setsort((pre) => !pre);
  };
   useEffect(() => {
   fetchData()

}, [id]);

const categoryFn=async(id)=>{
  setloading(true)
 fetchDataByCategory(id).then((res)=>{
  setdata(res.data.products)
  setloading(false)
 })
}

const fetchData=async()=>{
   try {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setloading(true)
    let res=await getDataPageNumber(id)
    if(res)
    {  
      setdata(res?.data?.products )
      setpage(res?.data)
      setloading(false)
      
        window.scrollTo({ top: 0, behavior: "smooth" });

    }

   } catch (error) {
    console.log(error)
    setloading(false)
   }
}
 

 //scroll 
  const [visible, setVisible] = useState(false);
 const toggleVisibility=()=>{
  setVisible(window.scrollY > 200);}
 
 useEffect(()=>{
   window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
 },[])
 
  useEffect(() => {
    if (filter) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [filter]);

  return (
    <div className="w-full h-full grid lg:grid-cols-[1fr,4fr] p-1.5  2xl:pr-20 lg:overflow-hidden ">
      <div className="w-full  lg:h-screen flex justify-between p-3 mb-3 ">
        {filter ? <Filter filter={filter} setfilter={setfilter} setdata={setdata} setloading={setloading}/> : ""}
      
        <button
          className={` font-serif z-10 ${filter ? "hidden" : "flex"} lg:hidden`}
          onClick={() => setfilter((pre) => !pre)}
        >
          {" "}
          <i className="py-1">
            <MdFilterAlt size={18} color="black" />
          </i>{" "}
          Filter
        </button>
        <button
          className={` font-serif z-10 ${filter ? "hidden" : "flex"} lg:hidden` }
       onClick={sortFn} >
          {" "}
          <i className="py-1" >
            <BsSortDown size={18} />
          </i>{" "}
          Sort
        </button>

        <aside className={`right-2 w-1/5 fixed  left-0 gap-3 p-3 z-50 hidden lg:block 2xl:pl-20  ${visible?"top-5":""} `}>
          <div className="flex justify-between p-1 w-full row-span-2 ">
            <h2 className="font-serif">Filter</h2>
          </div>

          <div className="w-full row-span-11 font-sans">
            <ul className="p-2 space-y-4 text-gray-600">
             
              <li>
                <h3 className="font-semibold mb-1">Category</h3>
                <ul className="ml-4 space-y-1">
                  {
                    categories?.map((ele)=>(
                      <li className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="Category" value={ele} checked={category==ele} onClick={(e)=>{
                   setcategory(e.target.value)
                    categoryFn(e.target.value)
                   }}/>
                    <span>{ele}</span>
                  </li>
                    ))
                  }
                </ul>
              </li>

              

             

             
              
            </ul>
          </div>
        </aside>
      </div>

      <div>
        <div
          className={`w-full  lg:justify-end lg:p-4 lg:px-10 lg:pr-6  lg:flex relative place-items-start`}
        >
          <button
            className={` font-serif z-10 lg:flex hidden `}
            onClick={sortFn}
          >
            {" "}
            <i className="py-1">
              <BsSortDown size={18} />
            </i>{" "}
            Sort
          </button>
          {sort ? <Sort data={data} setdata={setdata} setloading={setloading}/> : ""}
        </div>
             
           {
            data.length==0?
            (
              <NoDataFound/>
            )
            
            :(
               <div className="grid grid-cols-1 mobile:grid-cols-2 gap-2 sm:grid-cols-3   xl:grid-cols-4 ">
          {
            loading?(
           
           
             
              [{},{},{},{},{},{},{},{}].map((ele,key)=>(
              <Skeleton key={key}/>
            ))
           
           
            ):(
              data?.length>0&&
              data?.map((ele) => (
            <Card  element={ele}/>
          ))
        
        )
        }
        </div>
          
            )
           }
        
        {
          data.length==0?"":<Paginations pageCount={page} setId={setId}/>
        }
      </div>
    </div>
  );
}

export default Product;
