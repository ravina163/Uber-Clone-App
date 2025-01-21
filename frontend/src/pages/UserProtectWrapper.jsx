import React, { useContext, useEffect } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'


const UserProtectWrapper = ({ children }) => {

  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  console.log(token)
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [token])

  // if(isLoading){
  //   return(
  //     <div>Loading...</div>
  //   )
  // }

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper
