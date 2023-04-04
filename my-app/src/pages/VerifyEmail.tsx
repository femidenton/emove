import { useParams, useNavigate } from 'react-router-dom'
import { verifyUser } from '../api/api'
import { StyledVerifyEmailPage } from '../styles/StyledVerifyEmailPage'
import Icon from '../images/Icon.png'
export default function VerifyEmail() {
  // const navigate = useNavigate()
  // // const { id, token } = useParams()
  // const id: string = useParams().id as string
  // const token: string = useParams().token as string
  // const handleSubmit = async () => {
  //   const verifyResponse = await verifyUser(id, token)
  //   console.log(verifyResponse)
  //   // const { response } = verifyResponse.response

  //   if (verifyResponse.status === 'success') {
  //     navigate('/login')
  //   } else {
  //     navigate('/')
  //   }
  // }

  return (
    <StyledVerifyEmailPage>
      <div className="box">
        <div className="icon">
          <img src={Icon} alt="" />
        </div>
        <h2><strong>Verify your email</strong></h2>
        <p>
          Hi there, a verification link has been sent to your email.
        </p>
        {/* <input type="submit" onClick={handleSubmit} value="Verify email" /> */}
      </div>
    </StyledVerifyEmailPage>
  )
}
