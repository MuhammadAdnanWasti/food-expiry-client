import React from 'react'
import { motion } from "motion/react"
const Banner2 = () => {
  return (
      <div className="  min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div  className='flex-1'>
       <motion.img src="https://i.ibb.co/hFmwWTDp/orange-juice-732x549-thumbnail.jpg" 
       animate={{y:[0,50,0]}}
       transition={{duration:5, repeat:Infinity}}
        className="w-[90%] md:max-w-sm rounded-t-2xl rounded-br-2xl border-amber-200 border-l-3 border-b-3 shadow-2xl" />
        <motion.img
      src='https://i.ibb.co/KcPg1QBf/goodvegetablesoup-73412-16x9.jpg'
      
      animate={{y:[0,50,0]}}
      transition={{duration:5,repeat:Infinity}}
      className="w-[90%] md:max-w-sm rounded-t-2xl rounded-br-2xl border-amber-200 border-l-3 border-b-3 shadow-2xl"
    />
    </div>
    <div className='flex-1'>
      <motion.h1 className='text-3xl font-extrabold text-amber-300'
      animate={{scale:[0,1]}}
    transition={{duration:5,repeat:Infinity}}
      >
      Effective for Food Waste Control
      </motion.h1>
  
      <p className="py-6">
        A Food Expiry Tracker System is a digital tool—often implemented as a web or mobile app—designed to help users monitor the expiration dates of perishable and non-perishable food items. The goal is to reduce food waste, save money, and ensure safe consumption.


      </p>
    
    </div>
  </div>
</div>
  )
}

export default Banner2
