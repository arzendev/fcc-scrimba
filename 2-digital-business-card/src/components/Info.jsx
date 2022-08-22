import React from 'react'
import me from '../assets/bass.jpg';

import mail from '../assets/mail.png'
import linkedin from '../assets/linkedin.png'

function Info() {
  return (
    <div className="info">
      <img className="info-img" src={me} alt="" width="40px" />

      <div className="info-container">
        <h1 className="info-title">Lucca Rodrigues</h1>
        <h2 className="info-subtitle">Frontend Developer</h2>
        <h4 className="info-website">http://34.200.98.64/</h4>
        <div className="info-btns">
          <button className="info-btns-btn btn1">
            <img src={mail} alt="" />
            <p>Email</p>
          </button>
          <button className="info-btns-btn btn2">
            <img src={linkedin} alt="" />
            <p>LinkedIn</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info