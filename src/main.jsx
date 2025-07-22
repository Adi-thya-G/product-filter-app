import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router'
import ProductDetails from './pages/ProductDetails.jsx'
import Cart from './pages/Cart.jsx'
import{Provider} from 'react-redux'
import { store } from './store/store.js'
const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"product/:id",
      element:<ProductDetails/>
    },
    {
      path:"cart",
      element:<Cart/>
    }
  ]
}])
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <RouterProvider router={router}/>
   </Provider>
)
