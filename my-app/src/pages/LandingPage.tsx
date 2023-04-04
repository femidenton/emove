import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLandingPage = styled.div`
  background-color: #b97373;
  text-decoration: none;
  color: white;
`

const LinkStyle = styled(Link)`
  text-decoration: none;
  color:green;
`
export default function LandingPage() {
  return (
    <StyledLandingPage>
      <h1>LandingPage</h1>
      <LinkStyle to="/signup">Signup</LinkStyle>
    </StyledLandingPage>
  )
}
