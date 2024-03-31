import React,{ useState }  from 'react';

import imgSignIn from '../../assets/images/signin-g.svg';
import { useFormik } from 'formik';

import * as Yup  from "yup";
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';


export default function SignIn() {

  let navigate = useNavigate();
  let [errorMessage,setErrorMessage] = useState('');
  let [loading, setLoading] = useState(false);

  function sendDataToApi(values) {
    setLoading(true);
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values).
    then(({data}) => {
      setLoading(false);
      console.log(data);
      if(data.message == 'success'){
        localStorage.setItem('token',data.token);
        navigate( '/home' );
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
      email : Yup.string().email().required(),
      password : Yup.string().matches(/^[A-Z][a-zA-Z0-9@#!%$&^*()]{6,}$/,'Password must match').required(),
    })

    return  schema;
  }


  let login = useFormik({
    initialValues: {
      email:'',
      password: '',
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
        <div className="col-lg-6 d-flex align-items-center">
            <img className='h-75 ' src={imgSignIn} alt="Freshcart"  />
        </div>
        <div className="col-lg-6 d-flex align-items-center">
         <div className="ms-4">
            <h4 className='fw-bolder'>Sign in to FreshCart</h4>
            <p>Welcome back to FreshCart! Enter your email to get started.</p>
            <form onSubmit={login.handleSubmit} >
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <input onBlur={login.handleBlur} onChange={login.handleChange} type="email" className="form-control" name='email' id="email" placeholder="Your Email" />
                    {login.errors.email && login.touched.email? <div className="d-flex align-items-center mt-2 alert alert-danger alert-input">{login.errors.email}</div>: null}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <input onBlur={login.handleBlur} onChange={login.handleChange} type="password" className="form-control" name='password' id="password" placeholder="Your Password" />
                    {login.errors.password && login.touched.password ? <div className="d-flex align-items-center mt-2 alert alert-danger alert-input">{login.errors.password}</div>: null}
                  </div>
                </div>
                <div className="col-md-12">
                  {errorMessage?<div className="d-flex align-items-center mb-2 alert alert-danger alert-input">{errorMessage}</div>:''}
                  <div className="mb-2">
                    <button disabled={!(login.dirty&&login.isValid)} type="submit" className="btn btn-primary w-100 fw-bold">
                     {loading? <i className='fa fa-spinner fa-spin'></i>:'Sign In'}
                    </button>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <p className='m-0 fw-fs d-flex'>Don’t have an account? 
                      <NavLink className="nav-link position-relative " aria-current="page" to="/SignUp">
                        <span className='text-main ms-1'>Sign Up</span>  
                      </NavLink>
                    </p>
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
