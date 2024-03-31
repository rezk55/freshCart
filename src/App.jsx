
import React from 'react';

import './App.css';
import { Offline } from "react-detect-offline";
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import Brands from './components/Brands/Brands';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AuthLayout from './Layouts/AuthLayout';
import MainLayout from './Layouts/MainLayout';
import NotFound from './components/NotFound/NotFound';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartContextProvider from './context/cartContext';
import WishlistProvider from './context/wishlistContext';


export default function App() {

  let routes = createBrowserRouter([
   {
    path:'/', element:<MainLayout/> ,  children:[
      {index:true,element:<ProtectedRoutes> <Home/></ProtectedRoutes>},
      {path:'home',element:<ProtectedRoutes> <Home/></ProtectedRoutes>},
      {path:'products',element:<ProtectedRoutes> <Products/></ProtectedRoutes>},
      {path:'categories',element:<ProtectedRoutes> <Categories/></ProtectedRoutes>},
      {path:'brands',element:<ProtectedRoutes> <Brands/></ProtectedRoutes>},
      {path:'cart',element:<ProtectedRoutes> <Cart/></ProtectedRoutes>},
      {path:'wishlist',element:<ProtectedRoutes> <Wishlist/></ProtectedRoutes>},
      {path:'product-details/:id',element:<ProtectedRoutes> <ProductDetails/></ProtectedRoutes>},
      {path:'*',element:<NotFound/>},
    ]
   },
   {
    path:'/', element:<AuthLayout/>,  children:[
      {path:'signIn',element:<SignIn/>},
      {path:'signUp',element:<SignUp/>},
    ],
   }
  ]);


  return (
    <>
    <Offline>
      <div className="offline">
        You are Offline Now
      </div>
    </Offline>
    
    <ToastContainer theme='colored' autoClose={300} />

    <CartContextProvider>
      <RouterProvider router={routes} />
    </CartContextProvider>

    {/* <WishlistProvider>
      <RouterProvider router={routes} />
    </WishlistProvider> */}

    </>
  )
}

