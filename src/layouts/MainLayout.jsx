import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../pages/Navbar'
import Footer from '../pages/Footer'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
  <Navbar></Navbar>
      </header>

      <main className="flex-grow max-w-[1200px] mx-auto w-full">
        <Outlet></Outlet>
      </main>

      <footer>
<Footer></Footer>
      </footer>
    </div>
  )
}

export default MainLayout
