import React, { useState } from 'react';
import imgSignUp from '../../assets/images/signup-g.svg';
import { useFormik } from 'formik';

import * as Yup  from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  let navigate = useNavigate();
  let [errorMessage,setErrorMessage] = useState('');
  let [loading, setLoading] = useState(false);

  function sendDataToApi(values) {
    setLoading(true);
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values).
    then(({data}) => {
      setLoading(false);
      console.log(data);
      if(data.message == 'success'){
        navigate( '/signIn' );
      }
    }).catch((error)=>{ 
      setErrorMessage(error.response.data.message);
      console.log(error.response.data.message);
      setLoading(false);
    });
   
  }

  //form validation using  YUP
  function validationSchema(){

    let schema = new Yup.object({
      name:Yup.string().min(2).max(20).required(),
      email : Yup.string().email().required(),
      phone : Yup.string().matches(/^01[0-2]\d{1,8}$/,'accept only egypt phone numbers').required(),
      password : Yup.string().matches(/^[A-Z][a-zA-Z0-9@#!%$&^*()]{6,}$/,'Password must match').required(),
      rePassword : Yup.string().oneOf([Yup.ref('password')],"Passwords must be the same").required(),
    })

    return  schema;
  }


  let register = useFormik({
    initialValues: {
      name: '',
      email:'',
      phone:'' ,
      password: '',
      rePassword: ''
    },
    validationSchema,
    onSubmit: (values) => { 
      sendDataToApi(values);
    }
  })
  return (
    <>
    <div className="container mt-5">
      <div className="row w-75 m-auto">
        <div className="col-lg-6">
            <img src={imgSignUp} alt="Freshcart"  />
        </div>
        <div className="col-lg-6 ">
         <div className="ms-4">
            <h4 className='fw-bolder'>Get Start Shopping</h4>
            <p>Welcome to FreshCart! Enter your data to get started.</p>
            <form onSubmit={register.handleSubmit} >
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <input onBlur={register.handleBlur} onChange={register.handleChange} type="text" className="form-control" name='name' id="name" placeholder="Your Name" />
                    {register.errors.name && register.touched.name? <div className="d-flex align-items-center mt-2 alert alert-danger alert-input">{register.errors.name}</div>: null}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <input onBlur={register.handleBlur} onChange={register.handleChange} type="email" className="form-control" name='email' id="email" placeholder="Your Email" />
                    {register.errors.email && register.touched.email? <div className="d-flex align-items-center mt-2 alert alert-danger alert-input">{register.errors.email}</div>: null}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <input onBlur={register.handleBlur} onChange={register.handleChange} type="tel" className="form-control" name='phone' id="phone" placeholder="Your Phone" />
                    {register.errors.phone && register.touched.phone ? <div className="d-flex align-items-center mt-2 alert alert-danger alert-input">{register.errors.phone}</div>: null}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <input onBlur={register.handleBlur} onChange={register.handleChange} type="password" className="form-control" name='password' id="password" placeholder="Your Password" />
                    {register.errors.password && register.touched.password ? <div className="d-flex align-items-center mt-2 alert alert-danger alert-input">{register.errors.password}</div>: null}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <input onBlur={register.handleBlur} onChange={register.handleChange} type="password" className="form-control" name='rePassword' id="RePassword" placeholder="RePassword" />
                    {register.errors.rePassword && register.touched.rePassword ? <div className="d-flex align-items-center mt-2 alert alert-danger alert-input">{register.errors.rePassword}</div>: null}
                  </div>
                </div>
                <div className="col-md-12">
                  {errorMessage?<div className="d-flex align-items-center mb-2 alert alert-danger alert-input">{errorMessage}</div>:''}
                  <div className="mb-2">
                    <button disabled={!(register.dirty&&register.isValid)} type="submit" className="btn btn-primary w-100 fw-bold">
                     {loading? <i className='fa fa-spinner fa-spin'></i>:'Register'}
                    </button>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <p className='m-0 fw-fs'>By continuing, you agree to our <a href="http://">
                      <span className='text-main'>Terms of Service & Privacy Policy</span>
                    </a></p>
                  </div>
                </div>
              </div>        
            </form>
         </div>
        </div>
      </div>
    </div>
    </>
  )
}
