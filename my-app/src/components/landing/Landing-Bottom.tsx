import React from 'react'
import PropTypes from "prop-types";
import Logo from './Logo-footer'
import { Styledfooter } from './styles/Landing-Bottom.styled';
const insta = require("../landing/Assets/insta.png")
const twitter = require("../landing/Assets/twitter.png")
const youTube = require("../landing/Assets/youTube.png")


const Footer = () => {
  return (
    <Styledfooter>
    <div className='Landing-footer'>
      <div className='footer-container'>
        <div className='Logo-footer'>
                              <Logo/>
        </div>
        <h1 className='title-footer'>E-Move</h1>
        <div className='row'>
          {/* column1 */}
            <div className='col'>
              <p>About</p>
            </div>
           {/* column2 */}
                       <div className='col'>
              <p>Privacy</p>
            </div>
            {/* column3 */}
                        <div className='col'>
              <p>FAQ</p>
            </div>
        </div>
        <hr />
        <div className='social-bottom'>
        <div className="dot">
          <img className= "social-icon" src={insta} alt="insta" />
        </div>
        <div className="dot">
          <img className= "social-icon" src={twitter} alt="twitter" />
        </div>
        <div className="dot">
          <img className= "social-icon" src={youTube} alt="youTube" />
        </div>
                </div>
        <div className='row-bottom'>
          <p className='copy-right'>All rights reserved ©2023 Adire</p>
          <p className='copy-right'>Help@adire.com</p>
          </div>
      </div>
      </div>
    </Styledfooter>
  )
}

export default Footer