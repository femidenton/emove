import logo from './dashboard/images/logo.png'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import { StyledUserDashboardNavbar } from '../styles/userDashboardHeader.styled'

const UserDashboardHeader = () => {
  return (
    <StyledUserDashboardNavbar>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="..." />
          E-move
        </div>
        <div className="right">
          <ul>
            <li>
              <Link to="/user/book-route">Book a route</Link>
            </li>
            <li>
              <Link to="#">Payment</Link>
            </li>
            <li>
              <Link to="#">Wallet</Link>
            </li>
          </ul>
        </div>
        <div className='user'>
          <h4>Hi, Johnson</h4>
          <FaChevronDown />
        </div>
      </div>
    </StyledUserDashboardNavbar>
  )
}

export default UserDashboardHeader
