import PropTypes from "prop-types";
import Button from './Button'
import Logo from './Logo'
import { StyledLandingTop } from './styles/Landing-top.styled';

const LandingTop = (props: {
 title: string,
}) => {
  return (
    <StyledLandingTop>
    <div className='Landing-container'>
     <div className='left-top'>
       <Logo/>
            </div>
            <div className='left-top-h1'>
                   <h1 >{props.title}</h1>
            </div>
     <Button text={"Get Started"} About={"About"} Login={'Login'}/>
    </div>
    </StyledLandingTop>
  )
}

LandingTop.defaultProps = {
  title: "E-move",
};

LandingTop.propTypes = {
  title: PropTypes.string.isRequired,
};
export default LandingTop