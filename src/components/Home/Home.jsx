import React from 'react'
import MainSlider from '../MainSlider/MainSlider'
import Categories from '../Categories/Categories'
import Products from '../Products/Products'
import Footer from '../Footer/Footer'
import Brands from '../Brands/Brands'

export default function Home() {
  return (
    <>
     <section className='header mx-4 mt-5 pt-5' id='header'>
         <div className="container-fluid ">
          <MainSlider/>
         </div>
     </section>
     <Brands/>
     <Categories />
     <Products />
    </>
  )
}
