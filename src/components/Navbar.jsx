import '../pages/home/home.css'

function Navbar() {
  return (
    <>
      <nav className="text-xs sm:text-3xl sm:p-6 p-4 navbar">
        <ul>
          <li>
            <a className='HOME decoration-0 text-gray-500 hover:text-white' href="">Home</a> 
          </li>
          <li>
            <a className='HOME decoration-0 text-gray-500 hover:text-white' href="">About me</a> 
          </li>  
          <li>
            <a className='HOME decoration-0 text-gray-500 hover:text-white' href="">Work</a> 
          </li>
          <li>
            <a className='HOME decoration-0 text-gray-500 hover:text-white' href="">Contact</a> 
          </li>
        </ul>
      </nav>

      <nav className="text-black">
        <ul id="mobilenav"
            data-visible='false'
            className='pt-5 '
        >
          <li className='p-2 mt-[5rem] text-right'>
            <a className='text-[2rem]' href="">Home</a> 
          </li>
          <li className='p-2 text-right'>
            <a className='text-[2rem]' href="">About me</a> 
          </li>  
          <li className='p-2 text-right '>
            <a className='text-[2rem]' href="">Work</a> 
          </li>
          <li className='p-2 text-right'>
            <a className='text-[2rem] ' href="">Contact</a> 
          </li>
          <div className='triangle-container2'></div>
        </ul>
      </nav>
 
    </>
  )
}

export default Navbar
