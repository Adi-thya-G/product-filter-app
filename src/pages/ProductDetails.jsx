import React, { useEffect, useState } from 'react'
import DetailCard from '../components/DetailCard'
import SearchBar from '../components/SearchBar'
import axios from 'axios'
import { productDetails } from '../lib/api'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
function ProductDetails() {
 const {id}=useParams()
 const [data,setdata]=useState([])
  
  useEffect(()=>{
   productDetails(id).then((res)=>{
    setdata(res.data?.product)})
  },[])
 
  const selector=useSelector((state)=>state.auth.cartData)
  return (
    <div>
       
      <DetailCard data={data} cartData={selector}/>
    </div>
  )
}

export default ProductDetails