import React from 'react'
import LinkedinLogo from '../assets/icons/linkedin_logo.svg'
import InstagramLogo from '../assets/icons/instagram_logo.svg'
import GithubLogo from '../assets/icons/github_logo.svg'

function Links() {
  return (
    <div>
      <ul className='sm:p-6 inline-flex gap-4'>
        <li>
          <a target='_blank' href="https://www.linkedin.com/in/rafael-flores-85a5a4289/"><img className='min-w-[40px] 'src={LinkedinLogo}/></a>
        </li>
        <li  className='hidden sm:inline'>
        <a target='_blank' href="https://github.com/FloWareR"><img className='min-w-[40px] 'src={GithubLogo}/></a>

        </li>
        <li  className='hidden sm:inline'>
        <a target='_blank' href="https://www.instagram.com/https.rafx/"><img className='min-w-[40px] 'src={InstagramLogo}/></a>
        </li>
      </ul>
    </div>
  )
}

export default Links
