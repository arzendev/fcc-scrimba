import React from 'react'

import twit_logo from '../assets/twitter.png'
import fb_logo from '../assets/facebook.png'
import insta_logo from '../assets/insta.png'
import gh_logo from '../assets/github.png'

function Footer() {
  return (
    <div className='footer'>
      <img className='footer-img' src={twit_logo} alt="" />
      <img className='footer-img' src={fb_logo} alt="" />
      <img className='footer-img' src={insta_logo} alt="" />
      <img className='footer-img' src={gh_logo} alt="" />
    </div>
  )
}

export default Footer