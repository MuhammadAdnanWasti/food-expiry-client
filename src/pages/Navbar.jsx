import React, { use } from 'react'
import { PiBowlFoodFill } from 'react-icons/pi'
import { Link, NavLink, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {user,signOutUser}=use(AuthContext)
  const navigate=useNavigate()
  const handleSignOut=() => { 
     signOutUser()
.then(()=>{
  setTimeout(() => {  navigate('/')}, 100)

}).catch(error=>{
  // console.log(error)
})
   }
  return (
    <div>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/fridge'>Fridge</NavLink></li>
       {
        user &&
        <>
         <li><NavLink to='/addFood'>Add Food</NavLink></li>
        <li><NavLink to='/myItems'>My items</NavLink></li>
        </>
       }
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><PiBowlFoodFill size={36} /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/fridge'>Fridge</NavLink></li>
       {
        user &&
        <>
         <li><NavLink to='/addFood'>Add Food</NavLink></li>
        <li><NavLink to='/myItems'>My items</NavLink></li>
        </>
       }
    </ul>
  </div>
  <div className="navbar-end">
     {user ? 
   <>
  <div className="dropdown dropdown-end ">
           <div className='flex gap-2'>
             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user.photoURL} />
              </div>
            </div>
            <ul>
               <li><button className='btn btn-primary' onClick={handleSignOut}>Log Out</button></li>
            </ul>
           </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
           
             <li>Email:{user.email}</li>
             
            </ul>
          </div>
    
   </>:<>
   <Link className="btn " to='/auth/login'>Login</Link>
   <Link className="btn " to='/auth/register'>Register</Link>
  </>}
  </div>
</div>
    </div>
  )
}

export default Navbar
