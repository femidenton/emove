import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../api/api'
import { StyledLoginPage } from '../styles/StyledLoginPage'
import image1 from '../images/image1.png'
import Road from '../images/Road.png'
import { HiOutlineMail } from 'react-icons/hi'
import { VscKey } from 'react-icons/vsc'

export default function Login() {
  const [loginData, setLoginData] = useState({})
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const updateLoginData = (e: any) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    })
    setError('')
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const loginResponse: any = await loginUser(loginData)
    console.log(loginResponse)
    if (loginResponse.response) {
      const { data } = loginResponse.response
      if (data.message) {
        console.log(data.message)
        setError(data.message)
      }
      return
    }

    const { data } = loginResponse
    localStorage.setItem('userToken', JSON.stringify(data))
    navigate('/dashboard')
  }

  const renderError = () => {
    setTimeout(() => {
      setError('')
    }, 5000)
    return <p style={{ color: 'red' }}>{error}</p>
  }

  return (
    <StyledLoginPage>
      <div className="form-container">
        <div className="logo-header">
          <img src={Road} alt="" />
          <h1>E-Move</h1>
        </div>

        <form action="" className="form">
          <h2>Hi, Welcome back</h2>
          <div className="form-group1">
            <label>Email</label>
            <div className="input">
              <HiOutlineMail className="icon" />
              <input
                type="text"
                name="email"
                onChange={updateLoginData}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="form-group1">
            <label>Password</label>
            <div className="input">
              <VscKey className="icon" />
              <input
                type="password"
                name="password"
                onChange={updateLoginData}
                placeholder="Enter your password"
              />
            </div>
          </div>
          <p>
            <Link to="/forgot-password" className="link">
              Forgot password?
            </Link>
          </p>
          <button onClick={handleSubmit}> Login</button>
          <div className="para">
            <p>
              Don't have an account yet?{' '}
              <Link to="/signup" className="link">
                Create account
              </Link>
            </p>
          </div>
        </form>

        <div>{error && renderError()}</div>
      </div>

      <div>
        <img src={image1} alt="" />
      </div>
    </StyledLoginPage>
  )
}
