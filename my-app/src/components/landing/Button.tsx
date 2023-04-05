import { useNavigate} from 'react-router-dom'
import { StyledButton } from './styles/button.styled';

const Button = (props: {color: string, text: String, About: string, Login: String}) => {
  const navigate = useNavigate();

  const navigateToSignup = () => 
  navigate('/signup');
  return (
    <StyledButton>
   <div className='right-nav'>
    <a href="/about"className='p-1'>
      {props.About}
    </a>
        <a href="/login" className='p-2'>
      {props.Login}
    </a>
       <button onClick = {navigateToSignup}className='Landing-button'>
     {props.text}
   </button>
   </div>
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

export default Button