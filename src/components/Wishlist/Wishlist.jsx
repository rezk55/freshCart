import React, { useContext, useEffect, useState } from 'react'
import { Cartcontext } from '../../context/cartContext';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';

export default function Wishlist() {

 const {getWishList, setCounterWish,removeWishlist} = useContext(Cartcontext);
 const [dataWish,setDataWishList] = useState([]);
 const [loading,setLoading] = useState(false);
 const getWishLists = async ()=>{
                        const data = await getWishList();
                        if(data.status == 'success'){
                          setDataWishList(data);
                          setLoading(false);
                        }
                      }

 async function deleteProduct(id){
  const data = await removeWishlist(id);
  if(data.status=='success'){
    setCounterWish(data.data.length);
    getWishLists();
    toast.error('Product deleted successfully!');
  }
 }


 useEffect(() => {
    setLoading(true);
    getWishLists();
},[]);

if(loading) return <Loading/>;

if(dataWish.count==0 ||dataWish==null)  return <div className="text-main text-center mt-5 p-5 fs-5 fw-bolder">Your cart is empty</div>;

  return (
    <>
     <section className="car mt-5 py-3 pt-5 bg-bg-body-tertiary" id="cart">
        <div className="container bg-main-light shadow py-3">
          <h3 className='fw-bolder'>My Wishlist:</h3>
          {
            dataWish?.data?.map((item)=>{
              return (
                <div className="row py-2 border-bottom" key={item._id}>
                <div className="col-1">
                  <img className='w-100' src={item.imageCover} alt="" srcset="" />
                </div>
                <div className="col-11 d-flex justify-content-between">
                <div className="details">
                  <h6 className='fw-bold mb-1'>{item.title}</h6>
                  <p className='text-main mb-1 fw-fs fs-6'>Price: <span>{item.price}</span></p>
                  <button onClick={()=>deleteProduct(item._id)} className='btn p-0 m-0 border-0'><i class="fa-solid fa-trash-can text-main"></i> <span className='fw-fs fs-6 text-muted'>Remove</span></button>
                </div>
                </div>
              </div>
              )
            })
          }
        </div>
     </section> 
    </>
  )
}
