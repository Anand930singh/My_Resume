import React from 'react'
import Prof from './prof1.jpg'

function profile() {
  return (
    <>
    <div className='profile_card'>
        <div className='details'>
          <div className="text">Hi, I am Anand,<br/> a 2nd year student</div>
          <div className='mail'><a href="mailto:anand2002king@gmail.com">Email me</a></div>
          <div className="social_media">
          <a href="/home">Linkedin</a> / <a href="/home">Facebook</a> / <a href="/home">Twitter</a>
        </div>
        </div>
        <div className='image'>
          <img src={Prof} alt="not found"/>
        </div>
    </div>
    </>
  )
}

export default profile
