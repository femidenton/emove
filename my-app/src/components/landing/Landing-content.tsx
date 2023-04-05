import Bus from './Bus'
import { StyledLandingContent } from './styles/Landing-content-styled'
const pointer = require("../landing/Assets/pointer.png")



const Content = () => {
 const statement1 = ['You no longer need cash! Make payment',<br />, 'to go to your daily routes via E-move']
  return (
    <StyledLandingContent>
    <div className='content-container'>
     <div className='content-t1-div'>
           <h2 className='content-t1'>
       Need to go out?
     </h2>
     </div>
     <div className='content-p1-div'>
     <p className='content-p1'>
       {statement1}
     </p>
     </div>
     <div className='content-p2-div'>
      <p className='content-p2'> How to book a trip</p>
      </div>
      <div className='content-p3-div'>
             <p className='content-p3'> <img className='content-pointer' src={pointer}alt="pointer"/> Pick a route</p>
              <p className='content-p3'> <img className='content-pointer' src={pointer}alt="pointer"/> Make your booking</p>
               <p className='content-p3'> <img className='content-pointer' src={pointer}alt="pointer"/> Board a registered vehicle</p>
                <p className='content-p3'> <img className='content-pointer' src={pointer}alt="pointer"/> Make payment</p>
                 <p className='content-p3'><img className='content-pointer' src={pointer}alt="pointer"/>  Arrive at your destination safely</p>
       </div>
       <Bus/>
     </div>
    </StyledLandingContent>
  )
}

export default Content