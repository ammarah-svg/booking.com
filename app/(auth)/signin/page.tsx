import React from 'react'
import NextAuth from "next-auth";
import Button from '@/app/components/user/Button'
import {authenticate} from '@/app/backend/actions'

const signIn = async() => {
   
  return (

   
    <>
    <div className="bar bg-[#013b95]">
        <div className='flex w-[70%] justify-between mx-auto py-4 text-white '>
    <h3>Booking.com</h3>
    <div className='flex gap-4 items-center'>
    <img className="w-[25px]" src="https://q-xx.bstatic.com/backend_static/common/flags/new/48-squared/gb.png" alt="" />
    <h2>?</h2></div></div>
        </div>
    
    <div className="body-section w-[30%] mt-6 pt-8 font-bolder text-2xl mx-auto">
        <h3 className='text-center'>Sign in to an existing account</h3>
    
    
    
         <div className="container mt-9 p-4 ">
                    <form className="block w-full px-3 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" action={authenticate}>
                        <div className="f ">
                        <input name='email' className='mt-3 block w-full px-3 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' type="email" placeholder='Email' />
                        </div>
                       
                      <input name='password' className='mt-3 block w-full px-3 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' type="password" placeholder='Password' />
                       
                        <Button  content="Sign In" />
                    </form></div>
                    <hr className="border-gray-200 my-4" />
                    <p className='text-[10px] text-center'>By signing in or creating an account, you agree with our <a className='text-blue-700' href="">Terms & conditions</a> and <a href="" className='text-blue-700'>Privacy statement</a>
    <br/>All rights reserved.<br/>
    Copyright (2006 - 2024) - Booking.com™
    
                        
                    </p>
                </div></>
  )
}

export default signIn