import { StyledEmailConfirmation } from '../styles/emailconfirmation.styled'
import { StyledForgotPassword } from '../styles/forgotpassword.styled'

const ResetPassword = () => {
  return (
    <StyledForgotPassword>
      <form className="box">
        <h1>Reset Password</h1>
        <div className="field">
          <label htmlFor="newpassword">New Password</label>
          <input type="text" placeholder="Enter your new password" />
        </div>
        <div className="field">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input type="text" placeholder="confirm password" />
        </div>
        <button className="main-reset">Reset Password</button>
      </form>
    </StyledForgotPassword>
  )
}

export default ResetPassword
