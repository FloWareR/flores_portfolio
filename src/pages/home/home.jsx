import './home.css'
import React, { useState } from 'react'
import Logo_white from '../../assets/images/logo-white.png'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import Links from '../../components/Links.jsx'
import TypeAnim from '../../components/TypeAnim.jsx'
import Hamburger from 'hamburger-react'




function Home() {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuToggle = () =>{
    setIsOpen((open) => !open);
  };
  let menu
  let mask
  
  if (isOpen){
    menu = 
    <div className='fixed bg-white opacity-100 text-xl top-0 left-0 w-4/5 h-full transition-all z-10 shadow'>
      <ul>hola holah oasoijdajd</ul>
    </div>

    mask =
    <div className='bg-black opacity-50	 fixed top-0 left-0 w-full h-full z-10 transition-all' onClick={menuToggle}>

    </div>
  }



  return (
    <>
        {menu}
        {mask}
      <div className='flex h-full w-full'>
      <div onClick={menuToggle}    className=' w-[48px] h-[48px] navbar-overlay decoration-0 max-w-[20px] z-10'>
        <Hamburger direction='right' color={`${isOpen ? 'black' : "white"}`} />
      </div>
          <div className={`w-[20%] flex justify-center navbar navbar-overlay text-4xl ${isOpen ? 'open' : ''}`}>
            <Navbar/>

          </div>
          <div className='w-[60%] flex flex-col'>
            <div className='w-full h-[90%] flex flex-col items-center justify-center'>
              <img className='sm:w-[25%] w-[70%]' src={Logo_white} alt="" />
            <div className='w-full flex-col justify-center'>
             <h1 className='w-full sm:text-[4rem] text-[1rem] flex justify-center'>Hello! I'm a</h1> 
              <div className='flex  justify-center'>
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
