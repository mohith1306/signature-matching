import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
      <div className='header'>
        Signature Verfication
      </div>
      <div className='hero'>
        <div className = 'hero1'>
            Verify you signature authenticity
        </div>
        <p>
            upload an image of your signature to determine its authenticity. For best results, use clear and high resolution images.
        </p>
      </div>
    </div>
  )
}

export default Header
