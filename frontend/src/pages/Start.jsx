import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-center bg-top bg-[url(https://images.pexels.com/photos/8856297/pexels-photo-8856297.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)]  h-screen pt-8 flex justify-between w-full flex-col  bg-gray-100'>
            <img className='w-16 ml-8 ' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home
