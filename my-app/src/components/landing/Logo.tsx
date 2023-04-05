import React from 'react'
import { StyledLogo } from './styles/Logo.styled'
const orange = require("../landing/Assets/orange.png")
const road = require("../landing/Assets/road-white.png")



const Logo = () => {
  return (
    <StyledLogo>
    <div className='Logo-small'>
      <div>
              <img className= "Logo-orange" src={orange} alt="Logo" />
      </div>
      <div>
        <img className= "Logo-road" src={road} alt="road" />
      </div>
    </div>
    </StyledLogo>
  )
}

export default Logo