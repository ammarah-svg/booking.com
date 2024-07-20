'use client'

import React, { useState } from 'react';
import Button from '@/app/components/user/Button';
import { addUser } from '@/app/backend/actions';
import { ToastContainer, toast } from 'react-toastify';


const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    if(!name || !email || !password){
      toast.error("please fill in all fields")
      }
    try {
      toast.success("Sign up successful!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error("Error signing up. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <div className="bar bg-[#013b95]">
        <div className='flex w-[70%] justify-between mx-auto py-4 text-white '>
          <h3>Booking.com</h3>
          <div className='flex gap-4 items-center'>
            <img className="w-[25px]" src="https://q-xx.bstatic.com/backend_static/common/flags/new/48-squared/gb.png" alt="" />
            <h2>?</h2>
          </div>
        </div>
      </div>

      <div className="body-section w-[30%] mt-6 pt-8 font-bolder text-2xl mx-auto">
        <h3 className='text-center'>Create an account</h3>

        <div className="container mt-9 p-4">
          <form 
            className="block w-full px-3 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
        action={addUser}  
          >
            <div className="f">
              <input 
                name='name' 
                className='mt-3 block w-full px-3 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' 
                type="text" 
                placeholder='Username' 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input 
                name='email' 
                className='mt-3 block w-full px-3 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' 
                type="email" 
                placeholder='Email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <input 
              name='password' 
              className='mt-3 block w-full px-3 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' 
              type="password" 
              placeholder='Password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button content="Create account" type="submit" pending={pending} />
          </form>
        </div>
        <hr className="border-gray-200 my-4" />
        <p className='text-[10px] text-center'>By signing in or creating an account, you agree with our <a className='text-blue-700' href="">Terms & conditions</a> and <a href="" className='text-blue-700'>Privacy statement</a>
          <br />All rights reserved.<br />
          Copyright (2006 - 2024) - Booking.com™
        </p>
      </div>
      <ToastContainer />
    </>
  );
}

export default SignUp;
