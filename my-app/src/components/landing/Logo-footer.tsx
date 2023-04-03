import React from 'react'
import { StyledLogoFotter } from './styles/Logo-footer-styled'
const orange = require("../landing/Assets/orange.png")
const road = require("../landing/Assets/road-white.png")


const Logo = () => {
  return (
    <StyledLogoFotter>
    <div className='Logo-small'>
      <div>
              <img className= "Logo-orange-footer" src={orange} alt="Logo" />
      </div>
      <div>
        <img className= "Logo-road-footer" src={road} alt="road" />
      </div>
    </div>
    </StyledLogoFotter>
  )
}

export default Logo