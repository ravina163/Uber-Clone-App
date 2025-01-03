import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='h-screen pt-8 flex justify-between w-full flex-col  bg-gray-100'>
            <img className='w-16 ml-8' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
            <div className='bg-white pb-4 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <button className='w-full bg-black text-white py-3 rounded mt-5'>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Home
