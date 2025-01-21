import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {height: '70%',padding:24})
      gsap.to(panelCloseRef.current, {opacity:1})
    }else{
      gsap.to(panelRef.current, {height: '0%',padding:0})
      gsap.to(panelCloseRef.current, {opacity:0})
    }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current, 
        { transform: 'translateY(0)'})
      }else{
        gsap.to(vehiclePanelRef.current, 
          { transform: 'translateY(100%)'}
        )
      } 
    },[vehiclePanel])

    useGSAP(function(){
      if(confirmRidePanel){
        gsap.to(confirmRidePanelRef.current, 
          { transform: 'translateY(0)'})
        }else{
          gsap.to(confirmRidePanelRef.current, 
            { transform: 'translateY(100%)'}
          )
        } 
      },[confirmRidePanel])
      
    useGSAP(function(){
      if(vehicleFound){
        gsap.to(vehicleFoundRef.current, 
          { transform: 'translateY(0)'})
        }else{
          gsap.to(vehicleFoundRef.current, 
            { transform: 'translateY(100%)'}
          )
        } 
      },[vehicleFound])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />

      <div  className='h-screen w-screen'>
        <img className='w-full h-full object-cover' src="https://media.geeksforgeeks.org/wp-content/uploads/20220218205322/WhatsAppImage20220218at54912PM-304x660.jpeg" alt="" />
      </div>

      <div className='flex flex-col h-screen absolute top-0 w-full justify-end '>
        <div className='h-[30%] bg-white p-6 relative'>
          <h5 ref={panelCloseRef} onClick={()=>setPanelOpen(false)} className='absolute right-6 top-6 text-2xl opacity-0'><i className="ri-arrow-down-wide-line"></i></h5>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e)=>submitHandler(e)}>
          <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full'></div>
          <input className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type="text" 
          onClick={()=>setPanelOpen(true)}
          value={pickup} onChange={(e)=>setPickup(e.target.value)}
          placeholder='Add a pick-up location' />
          <input 
           onClick={()=>setPanelOpen(true)}
          value={destination} onChange={(e)=>setDestination(e.target.value)}
          className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' type="text" 
          placeholder='Enter your destination' />
        </form>
        </div>
        <div ref={panelRef} className='h-0 bg-white'>
          <LocationSearchPanel panelOpen={panelOpen} setPanelOpen={setPanelOpen} vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-10  translate-y-full pt-12'>
       <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-6  translate-y-full pt-12'>
       <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={vehicleFoundRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-6  translate-y-full pt-12'>
       <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div  className='fixed w-full z-10 bg-white bottom-0 px-3 py-6 pt-12'>
       <WaitingForDriver />
      </div>

    </div>
  )
}

export default Home
