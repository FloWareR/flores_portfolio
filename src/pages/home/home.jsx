import './home.css'
import React from 'react'
import Logo_white from '../../assets/images/logo-white.png'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import Links from '../../components/Links.jsx'
import TypeAnim from '../../components/TypeAnim.jsx'

function Home() {

  return (
    <>
      <div className='flex h-full w-full'>
          <div className='w-[20%] flex justify-center'>
            <Navbar/>
          </div>
          <div className='w-[60%] flex flex-col'>
            <div className='w-full h-[90%] flex flex-col items-center justify-center'>
              <img className='w-[25%]' src={Logo_white} alt="" />
            <div className='w-full flex-col justify-center'>
             <h1 className='w-full text-[4rem] flex justify-center'>Hello! I'm a</h1> 
              <div className='flex justify-center'>
                 <TypeAnim/>
                </div>
            </div> 
            </div>
            <div className='w-full h-[10%] flex items-center justify-center'>
              <Footer/>
            </div>
          </div>
          <div className='w-[20%] flex justify-center'>
            <Links/>
          </div>
      </div>
      <div className="triangle-container"></div>
    </>
  )
}

export default Home
