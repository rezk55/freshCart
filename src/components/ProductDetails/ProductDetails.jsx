import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';
import { Cartcontext } from '../../context/cartContext';
import { toast } from 'react-toastify';

export default function ProductDetails() {
    const {counter,setCounter, addToCart} = useContext(Cartcontext);
    const [loadingBtn,setLoadingBtn] = useState(false);
    const x = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    async function  getData(){
        const {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.id}`);
        setProduct(data.data);;
        setLoading(false);
    }

    async function addProductToCart(productId){
      setLoadingBtn(true);
      const data =  await addToCart(productId);
      if(data.status=='success'){
        toast.success('Product added successfully to cart');
        setCounter(data.numOfCartItems);
        setLoadingBtn(false);
      }
    }

    useEffect(()=>{
       getData(); 
    },[]);

    if(loading) return <Loading/>

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
            <div className="col-md-3">
                <img className='w-100' src={product.imageCover} alt={product.title} />
            </div>
            <div className="col-md-9">
                <h5 className='fw-bold'>{product.title}</h5>
                <p className='text-muted my-2'>{product.description}</p>
                <p className='fw-bold fs-5 m-0'>{product.category?product.category.name:``}</p>
                <div className="rate d-flex justify-content-between">
                    <div className="price">
                        <strong>{product.price}</strong>
                        <span className="mx-2 fs-5">EGP</span>
                    </div>
                    <div className="star">
                        <i className="fa fa-star rating-color mx-1" aria-hidden="true"></i>
                        <span>{product.ratingsAverage}</span>
                    </div>
                </div>
                <button disabled={loadingBtn} onClick={()=>addProductToCart(product._id)} className="btn bg-main w-100 text-white">
                   {loadingBtn?<i className='fa fa-spinner fa-spin'></i>:'Add To Cart'}
                 </button>
         </div>
        </div>
      </div>
    </>
  )
}
