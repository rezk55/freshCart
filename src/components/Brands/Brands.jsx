import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Brand from '../Brand/Brand';
import Loading from '../Loading/Loading';

export default function Brands() {

  const [brands,setBrands] = useState([]);
  const [loading,setLoading] = useState(false);

  async function getBrands(){
    setLoading(true)
    let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/brands');
    setBrands(data.data);
    setLoading(false);
    console.log(data.data);
  }

  useEffect(()=> {
    getBrands();
  },[]);

  let settings = {

    arrows:false,
    autoplay:true,
    autoplaySpeed:0,
    infinite: true,
    speed: 200000,
    slidesToShow: 4,
    slidesToScroll: 40,
    centerPadding: '30px',
 
  };

  if(loading) return <Loading/>;

  return (
    <>
      <section className='mt-5 py-5 '>
        <h4 className='ms-2 fw-bold'></h4>
        <Slider {...settings} className='brands-slide container-fluid'>
        {
          brands.map((item)=>{
            return <Brand item={item} key={item._id}/>
        })
        }
      </Slider>
    </section>
    </>
  )
}
