
import { StyledMain } from './styles/main.styled'
import LandingTop from "./Landing-top";
import Content from "./Landing-content";
import Footer from "./Landing-Bottom";

function Landing(){
 return(
   <StyledMain>
    <div className="container">
      <LandingTop/>
      <Content/>
      <Footer/>
    </div>
    </StyledMain>
 )
}

export default Landing