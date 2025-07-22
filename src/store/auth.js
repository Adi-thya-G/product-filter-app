import {createSlice} from '@reduxjs/toolkit'

 const initialState={
  cartData:[]
 }

 const authSlice=createSlice(
  {
    name:"auth",
    initialState,
    reducers:{
      addCartData:(state,action)=>{
        state.cartData=[...state.cartData,action.payload]
      },
      removeCartData:(state,action)=>{
       state.cartData= state.cartData?.filter((ele)=>ele.code!=action.payload.code)
      },
      updateQty:(state,action)=>{
             const item=state.cartData?.find((ele)=>ele.code===action.payload?.code)
             if(item)
             {
              console.log(action.payload)
              item.qty=action.payload.qty+1
             }
      }
      

    }
  }
 )
 export const{ addCartData,removeCartData,updateQty}=authSlice.actions

 export default authSlice.reducer