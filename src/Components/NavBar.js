import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='NavBar'>
       <img src='https://static.vecteezy.com/system/resources/previews/018/930/572/original/youtube-logo-youtube-icon-transparent-free-png.png' alt='logo'/>
       <form>
            <input type='text' placeholder='Search'/>
       </form>
       <h1>icons</h1>
    </div>
  )
}

export default NavBar