import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderSignUp from '../components/HeaderSignUp/HeaderSignUp'

export default function AuthLayout() {
  return (
    <>
      <HeaderSignUp/>
      <Outlet/>
    </>
  )
}
