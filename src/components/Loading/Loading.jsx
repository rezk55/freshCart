import React from 'react'
import './Loading.css';

export default function Loading() {
  return (
           
    <div className=" vh-100 d-flex justify-content-center align-items-center">
         <div className="lds-roller bg-body">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
         </div>
    </div>
    
  )
}
