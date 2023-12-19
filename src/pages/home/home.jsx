import './home.css'
import React, { useEffect, useState } from 'react'
import Logo_white from '../../assets/images/logo-white.png'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import Links from '../../components/Links.jsx'
import TypeAnim from '../../components/TypeAnim.jsx'
import Hamburger from 'hamburger-react'




function Home() {
  const [isOpen, setIsOpen] = useState(false);

  
  useEffect(() => {
  
  }, []);

  
  const menuToggle = () =>{
    const navButton = document.querySelector('.navbar-overlay')
    const nav = document.querySelector('#mobilenav')
    const visibility = nav.getAttribute('data-visible');
    if(visibility =='false'){
      nav.setAttribute('data-visible', true)
    }
    else{
      nav.setAttribute('data-visible', false)
    }
  };




  return (
    <>
      <div className='flex h-full w-full'>
          <div className='w-[20%] flex justify-center text-4xl side-container'>
          <div onClick={menuToggle}    className=' max-w-[48px] max-h-[48px] navbar-overlay decoration-0 z-10'>
              <Hamburger direction='right' color={`${isOpen ? 'black' : "white"}`} />
          </div>
            <div className=''>
              <Navbar/> 
            </div>
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
