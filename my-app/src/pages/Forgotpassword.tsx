import { useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledForgotPassword } from '../styles/forgotpassword.styled'

export const ForgotPassword = () => {

  return (
    <StyledForgotPassword>
      <form className="box">
        <h1>Forgot Password</h1>
        <p>
          Enter the email associated with your accout and we'll send an email
          with instructions to reset your password
        </p>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Enter your email" />
          <button>Reset Password</button>
        </div>
        <Link to="/login">Back to Login</Link>
      </form>
    </StyledForgotPassword>
  )
}
