import { useParams, useNavigate } from 'react-router-dom'
import { verifyUser } from '../api/api'
import { StyledVerifyEmailPage } from '../styles/StyledVerifyEmailPage'
import Icon from '../images/Icon.png'
import { useState } from 'react'
import Login from './Login'
export default function VerifyEmail() {
  const [verifyStatus, setVerifyStatus] = useState(false)

  const navigate = useNavigate()
  const id: string = useParams().id as string
  const token: string = useParams().token as string

  const handleSubmit = async () => {
    const verifyResponse = await verifyUser(id, token)
    // const { response } = verifyResponse.response

    // if (verifyResponse.status === 'success') {
    //   navigate('/login')
    // } else {
    //   navigate('/')
    // }
    setVerifyStatus(verifyResponse.success)
  }
  // handleSubmit()
  // console.log(verifyStatus);

  return (
    
    <StyledVerifyEmailPage>
      <div className="box">
        <div className="icon">
          <img src={Icon} alt="" />
        </div>
        <h2>
          <strong>Verify your email</strong>
        </h2>
        <p>Hi there, a verification link has been sent to your email.</p>
        {/* <input type="submit" onClick={handleSubmit} value="Verify email" /> */}
      </div>
    </StyledVerifyEmailPage>
    // <div>
    //   {verifyStatus && <Login/>}
    // </div>
  )
}
