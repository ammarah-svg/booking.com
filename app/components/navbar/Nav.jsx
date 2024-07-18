import React from 'react'
import Link from 'next/link';
const Nav = () => {
  return (
    <>
    <div className=" bg-[#013b95]  ">
    <div className="w-[70%] mx-auto text-white">
    
   
      <div> 
    
    <div className="flex items-center  justify-between p-5">
    <h2 className="text-lg font-bold">Booking.com</h2>
    <div className="flex gap-3">
     <Link href="/login" className="bg-white text-black px-6 py-1 rounded-md border border-gray-300">Log in</Link>
     <Link href="/signup" className="bg-white text-black px-6 py-1 rounded-md border border-gray-300">Sign up</Link> </div>
     </div>


     <h1 className="mt-8 text-5xl font-bold">Find your next stay</h1>
     <p className="mt-3 pb-3 text-2xl">Search low prices on hotels, homes and much more...</p> </div>
     
    
     </div>  </div>

        <div className="w-[70%] mx-auto">
       <h3 className="text-2xl text-black mt-9 text-bold">Offers</h3>
       <p className="text-gray-600">Promotions, deals and special offers for you</p>
      
     <div className="text-white mt-3 h-[150px] py-5 px-3 rounded-lg w-[100%] bg-cover bg-center bg-[url('https://r-xx.bstatic.com/xdata/images/xphoto/714x300/350960127.jpeg?k=e2732d40882766c8edd0001d7cca566de1d43af2d117b964f2e3ccf579d9a498&o=')]">
     <h3>Seize the moment</h3>
     <p>Save 15% or more when you book and stay before 1 October 2024</p>
     <button className=" mt-3 px-6 py-1 rounded-md bg-blue-600">Find Gateway Deals</button>
    </div>

<div>
<h3 className="text-2xl mt-8">Browse by property type</h3>
</div>




    </div>
    </>
  )
}

export default Nav