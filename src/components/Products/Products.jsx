import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
import Product from '../Product/Product';
import { useQuery } from 'react-query';

export default function Products() {

  function getProducts(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  let {data,isLoading} = useQuery("products", getProducts,{
    refetchOnMount:false,
    refetchOnWindowFocus:false,
    refetchInterval:false,
  }) ;

  if(isLoading) return <Loading/>;



  return (
    <section className='products mt-5 pt-5' id='products'>
      <div className="container-fluid">   
        <div className="row row-cols-xl-6 row-cols-lg-5 row-cols-md-3 row-cols-2 gy-2">
          {
            data?.data.data.map((item)=>{
              return <div className="col"  key={item.id}>
                        <Product item= {item} />
                     </div>
            })
          }
        </div>
      </div>
    </section>
  )
}
