import { useState } from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import { Outlet } from 'react-router'
function App() {

  return (
   <>
  <Outlet/>
   </>
  )
}

export default App
