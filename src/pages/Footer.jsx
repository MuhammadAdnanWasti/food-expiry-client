import React from 'react'
import { PiBowlFoodFill } from 'react-icons/pi'

const Footer = () => {
  return (
   <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
    <div>
      <a className="btn btn-ghost text-xl"><PiBowlFoodFill size={36} /></a>   
    </div>
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
 
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Food Expiry Tracker System Ltd</p>
    <p>The Food Expiry Tracker System is a web app that helps users track food items and get alerts before they expire. It aims to reduce food waste by allowing users to add, view, update, and manage food with expiry dates. </p>
  </aside>
</footer>
  )
}

export default Footer
