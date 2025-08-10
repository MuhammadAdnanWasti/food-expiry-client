import React from 'react'
import { PiBowlFoodFill } from 'react-icons/pi'
import { NavLink } from 'react-router'

const Footer = () => {
  return (
  <div className='bg-base-200'>
     <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10  max-w-[1200px] mx-auto ">
    <div>
      <a className="btn btn-ghost text-xl"><PiBowlFoodFill size={36} /></a>   
    </div>
 <ul className="grid grid-flow-col gap-4">
  <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/fridge'>Fridge</NavLink></li>
 </ul>

 
 
 
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Food Expiry Tracker System Ltd</p>
    <p>The Food Expiry Tracker System is a web app that helps users track food items and get alerts before they expire. It aims to reduce food waste by allowing users to add, view, update, and manage food with expiry dates. </p>
  </aside>
</footer>
  </div>
  )
}

export default Footer
