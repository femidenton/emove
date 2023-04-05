import { FaEdit, FaTimes } from 'react-icons/fa'
import { StyledProfile } from './styles/profile.styled'
import man from '../dashboard/images/man.png'

const Profile = () => {
  return (
    <StyledProfile>
      <div className="flex">
        <h1>Profile Details</h1>
        <span>
          <FaTimes />
        </span>
      </div>
      <div className="flex1">
        <img src={man} alt="..." />
        <h4>Ifeoluba Obi</h4>
        <span>
          <FaEdit className="edi-icon" />
          Edit
        </span>
      </div>
      <hr />
      <div>
        <div className="flex2">
          <h5>Route of Operation</h5>
          <small></small>
          <span>Oshodi - Mile 2</span>
        </div>
        <div className="flex2">
          <h5>Phone Number</h5>
          <small></small>
          <span>09177373737736</span>
        </div>
        <div className="flex2">
          <h5>Account Number</h5>
          <small></small>
          <span>007327829278</span>
        </div>
        <div className="flex2">
          <h5>Upload Valid ID</h5>
          <small></small>
          <span>NIN</span>
        </div>
      </div>
    </StyledProfile>
  )
}

export default Profile
