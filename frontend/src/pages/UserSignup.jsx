import React, { useState, useSyncExternalStore } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'
const UserSignup = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()
  const {user, setUser} = React.useContext(UserDataContext)
  const submitHandler = async(e)=>{
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname:firstName,
        lastname:lastName,
      },
        emailL:email,
        password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

    if(response.status === 201){
      const data = response.data
      setUser(data.user)
      navigate('/home')
    }

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-16 mb-10' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
    <form onSubmit={(e)=>{submitHandler(e)}}>
      <h3 className='text-lg font-medium mb-2'>What's your name</h3>
      <div className='flex gap-4 mb-6'>
      <input 
      className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base'
      type="text"
      value={firstName}
      onChange={(e)=>setFirstName(e.target.value)} 
      placeholder='First name' required />
       <input 
      className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base'
      type="text"
      value={lastName}
      onChange={(e)=>setLastName(e.target.value)}  
      placeholder='Last name' required />
      </div>
      <h3 className='text-lg font-medium mb-2'>What's your email</h3>
      <input 
      className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-lg'
      type="email" 
      value={email}
      onChange={(e)=>setEmail(e.target.value)} 
      placeholder='email@example.com' required />
      <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
      <input 
      
      type="password" 
      placeholder='password' 
      value={password}
      onChange={(e)=>setPassword(e.target.value)} 
      required 
      className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-lg' />
      <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg '>Create Account</button>
     
    </form>
    <p className='text-center'>Already have a account?<Link className="text-blue-600" to='/login'>Login here</Link></p>
    </div>
    <div>
     <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
    </div>
  </div>
  )
}

export default UserSignup
