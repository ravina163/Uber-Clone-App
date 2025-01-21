import React from 'react'

const LocationSearchPanel = (props) => {

  const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "12B, Near Malhotra's cafe, Sheryians Coding School, Vesu",
    "20A, Near Sighaniya's cafe, Sheryians Coding School, Surat",
    "25C, Near Sharma's cafe, Sheryians Coding School, Vapi",
  ]

  return (
    <div>
      {
        locations.map(function(elem,idx){
          return(
            <div key={idx} onClick={()=>{
              props.setVehiclePanel(true)
              props.setPanelOpen(false)
         }} className='flex items-center justify-start my-2 gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl'>
            <h2 className='bg-[#eee] h-8 w-12 rounded-full flex items-center justify-center'><i className="ri-map-pin-fill "></i></h2>
            <h4 className='font-medium'>{elem}</h4>
          </div>
          )
        
        })
      }
      
   
    </div>
  )
}

export default LocationSearchPanel
