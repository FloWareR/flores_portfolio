import React from 'react'
import '../pages/home/home.css'



function Footer() {
  return (
      <nav className='inline-flex p-2 w-full divide-x-2 justify-center'>
          <nav className='p-1 sm:p-5 w-[50%] flex flex-col items-end'>
            <h1 className='address text-xs sm:text-lg'>Rafael Flores</h1>
            <p className='text-xs address text-right text-slate-400' >Software Development Student</p>
            <h1 className='address2 text-xs sm:text-lg'>Flores</h1>
            <p className=' address2 text-xs text-right text-slate-400' >Dev Student</p>
          </nav>
          <nav className='p-1 sm:p-5 w-[50%] flex flex-col'>
            <h1 className=' address text-xs sm:text-lg'>Guadalajara, Jal</h1>
            <h1 className='address2 text-xs sm:text-lg'>Gdl, Jal</h1>
            <p className=' address text-xs text-left text-slate-400' >Bahia de acapulco 3127 CP: 45609</p>
            <p className=' address2 text-xs text-left text-slate-400' >CP: 45609</p>

          </nav>
      </nav>
  )
}

export default Footer
