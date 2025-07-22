import React from 'react'
import SearchBar from '../components/SearchBar'
import Product from '../components/Product'
import Paginations from '../components/Paginations'
import { useState } from 'react'
function Home() {
  const [data,setdata]=useState([])
  return (
    <div className='mb-20'>
    <SearchBar data={data} setdata={setdata}/>
    <div>
      <Product data={data} setdata={setdata}/>
    

    </div>
    </div>
  )
}

export default Home