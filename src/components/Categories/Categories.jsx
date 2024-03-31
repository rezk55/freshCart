import axios from 'axios'
import React, { useEffect, useState } from 'react';
import './Categories.css';
import Slider from "react-slick";
import Category from '../Category/Category';
import Loading from '../Loading/Loading';

export default function Categories() {
  const [categories,setCategories] = useState([]);
  const [loading,setLoading] = useState(false);

  async function getCategories(){
    setLoading(true)
    let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
    setCategories(data.data);
    setLoading(false);
  }
  useEffect(()=> {
    getCategories();
  },[])
  
  let settings = {

    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll:1,
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
 
  };

  if(loading) return <Loading/>;
  return (
    <section className='mt-5 py-5'>
      <h4 className='ms-2 fw-bold'>Shop Popular Categories</h4>
      <Slider {...settings} className='categories-slide container-fluid'>
       {
        categories.map((item)=>{
          return <Category item={item} key={item._id}/>
       })
       }
    </Slider>
    </section>
  );
}
