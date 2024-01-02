// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Layout/Home.jsx'
import Shop from './component/Shop/Shop.jsx'
import Orders from './component/Orders/Orders.jsx'
import Inventory from './component/Inventory/Inventory.jsx'
import Login from './component/Login/Login.jsx'
import { cartProductsLoader } from './Loaders/CartProductsLoader'
import Checkout from './component/Checkout/Checkout.jsx'
import SingUp from './component/SignUp/SingUp.jsx'
import AuthProvider from './providers/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/checkout',
        element: <Checkout></Checkout>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SingUp></SingUp>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)
